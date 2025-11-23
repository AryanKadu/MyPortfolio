# DevPortfolioBuilder

A full-stack developer portfolio application built with React, TypeScript, Express, and Vite.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (optional for basic functionality):**
   - Copy `.env.example` to `.env`
   - Update the values if needed
   - **Note:** The app currently uses in-memory storage, so `DATABASE_URL` is only required if you plan to use a database. The app will work without it for basic functionality.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared TypeScript types and schemas
- `attached_assets/` - Static assets (resume, images, etc.)

## Features

- Modern, responsive portfolio design
- Dark/light theme support
- Contact form with validation
- Project showcase
- Skills and experience sections
- Smooth animations and transitions

## Technology Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Express.js + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **State Management:** TanStack Query
- **Form Validation:** React Hook Form + Zod
- **Database:** Currently using in-memory storage (Drizzle ORM configured for PostgreSQL)

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - Type check TypeScript files
- `npm run db:push` - Push database schema changes (requires DATABASE_URL)

## Deployment to Vercel

This project is configured for deployment on Vercel. Follow these steps:

1. **Install Vercel CLI (optional but recommended):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```
   
   Or connect your GitHub repository to Vercel through the [Vercel Dashboard](https://vercel.com/dashboard).

3. **Environment Variables (if needed):**
   - If you plan to use a database, add `DATABASE_URL` in Vercel's project settings
   - Go to Project Settings → Environment Variables

4. **Build Configuration:**
   - Vercel will automatically detect the build settings from `vercel.json`
   - Build command: `npm run build`
   - Output directory: `dist/public`
   - API routes are automatically handled in the `api/` directory

5. **After Deployment:**
   - Your portfolio will be live at `https://your-project.vercel.app`
   - API endpoints will be available at `/api/contact` and `/api/contact-submissions`

## Notes

- The application uses in-memory storage by default, so contact form submissions will be lost on server restart
- To use a persistent database, set up a PostgreSQL database and configure `DATABASE_URL` in your `.env` file
- The server runs on port 5000 by default (configurable via `PORT` environment variable)
- For Vercel deployment, the API routes are converted to serverless functions in the `api/` directory

