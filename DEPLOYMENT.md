# Vercel Deployment Guide

## Quick Start

### Option 1: Deploy via Vercel CLI (Recommended for first-time)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default or enter a custom name)
   - Directory? (Press Enter for current directory)
   - Override settings? **No**

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended for CI/CD)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click **"New Project"**
   - Import your GitHub repository
   - Vercel will auto-detect settings from `vercel.json`
   - Click **"Deploy"**

3. **Automatic deployments:**
   - Every push to `main` branch = Production deployment
   - Every push to other branches = Preview deployment

## Pre-Deployment Checklist

### 1. Test Build Locally
```bash
npm run build
```

This will:
- Build the React frontend
- Bundle the server code
- Copy attached assets (resume PDF)

### 2. Verify Files
After building, check that these exist:
- `dist/public/` - Frontend build
- `dist/public/attached_assets/` - Resume PDF
- `dist/index.js` - Server bundle (not needed for Vercel, but good to verify)

### 3. Test API Routes Locally (Optional)
You can test the API routes work correctly before deploying.

## Environment Variables (Optional)

If you plan to use a database later:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - `DATABASE_URL` - Your PostgreSQL connection string

**Note:** Currently, the app uses in-memory storage, so no environment variables are required.

## Post-Deployment

### Your Portfolio Will Be Live At:
- Production: `https://your-project-name.vercel.app`
- Preview: `https://your-project-name-git-branch-username.vercel.app`

### API Endpoints:
- `POST https://your-project.vercel.app/api/contact` - Submit contact form
- `GET https://your-project.vercel.app/api/contact-submissions` - Get submissions

### Verify Deployment:

1. **Check Frontend:**
   - Visit your Vercel URL
   - All sections should load correctly
   - Resume download should work

2. **Test Contact Form:**
   - Fill out and submit the contact form
   - Check browser console for errors
   - Verify success message appears

3. **Check API:**
   - Open browser DevTools → Network tab
   - Submit contact form
   - Verify `/api/contact` returns 200 status

## Troubleshooting

### Build Fails
- Check Vercel build logs in dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### API Routes Not Working
- Check that `api/` folder is in root directory
- Verify `vercel.json` has correct function configuration
- Check Vercel function logs in dashboard

### Assets Not Loading
- Verify `attached_assets` folder is copied during build
- Check that resume URL in schema matches actual file path
- Ensure files are committed to Git (Vercel only deploys committed files)

### CORS Issues
- API routes already include CORS headers
- If issues persist, check Vercel function logs

## Custom Domain (Optional)

1. Go to Vercel project → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificate

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

