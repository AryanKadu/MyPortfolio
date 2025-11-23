# Vercel Deployment - Important Notes

## How It Works

### For Vercel:
- **Frontend**: Built with Vite → `dist/public/` (served as static files)
- **API Routes**: Serverless functions in `api/` directory (NOT the Express server)
- **Server Bundle**: `dist/index.js` is NOT used on Vercel

### Architecture:
```
Vercel Deployment:
├── dist/public/          → Static frontend files (React app)
├── api/                  → Serverless functions
│   ├── contact.ts       → POST /api/contact
│   └── contact-submissions.ts → GET /api/contact-submissions
└── vercel.json          → Deployment configuration
```

## Key Differences from Local Development

### Local Development (`npm run dev`):
- Uses Express server (`server/index-dev.ts`)
- Vite dev server with HMR
- Single process serving both frontend and API

### Vercel Production:
- Frontend: Static files from `dist/public/`
- API: Individual serverless functions in `api/`
- Each API route is a separate serverless function

## Storage Behavior

⚠️ **Important**: The in-memory storage (`MemStorage`) will NOT persist data across requests on Vercel because:
- Each serverless function invocation is isolated
- The storage instance is recreated on each request
- Data is lost after the function completes

**For persistent storage**, you'll need to:
1. Set up a database (PostgreSQL, MongoDB, etc.)
2. Update `server/storage.ts` to use the database
3. Add `DATABASE_URL` environment variable in Vercel

## Build Process

The `build:vercel` command:
1. Builds the React frontend with Vite
2. Copies attached assets (resume PDF)
3. **Does NOT** bundle the Express server (not needed for Vercel)

The regular `build` command still bundles the server for local production testing.

## Testing Before Deployment

1. **Test build:**
   ```bash
   npm run build:vercel
   ```

2. **Verify files:**
   - `dist/public/index.html` exists
   - `dist/public/attached_assets/` contains resume PDF
   - `api/` directory has both `.ts` files

3. **Test locally (optional):**
   - You can't easily test serverless functions locally
   - But you can verify the frontend builds correctly

## Deployment Checklist

- [ ] Code is committed to Git
- [ ] `api/` directory exists with both route files
- [ ] `vercel.json` is in root directory
- [ ] `package.json` has `@vercel/node` in devDependencies
- [ ] Build completes successfully (`npm run build:vercel`)
- [ ] All static assets are in `dist/public/`

## Troubleshooting

### API Routes Return 404
- Check that files in `api/` are named correctly
- Verify `vercel.json` has functions configuration
- Check Vercel function logs in dashboard

### Build Fails
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses 18+)

### Storage Not Persisting
- This is expected with in-memory storage
- Use a database for persistent storage

