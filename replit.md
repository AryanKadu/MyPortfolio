# Aryan Kadu - Developer Portfolio

## Overview

This is a full-stack developer portfolio application built with React and Express, showcasing Aryan Kadu's projects, skills, experience, and professional background. The application features a modern, responsive design with dark/light theme support, smooth animations, and a contact form for visitor engagement. The portfolio follows a single-page application (SPA) architecture with section-based navigation and content organization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and API calls

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for styling with custom design tokens
- **Inter font family** via Google Fonts for typography
- CSS variables-based theming system supporting light/dark modes

**State Management**
- React Context for theme management (`ThemeProvider`)
- React Hook Form with Zod validation for form handling
- TanStack Query for server state caching and synchronization

**Design Principles**
- Professional minimalism with content-first hierarchy
- Material Design-inspired spacing and elevation system
- Responsive grid layouts (3-column to 1-column based on breakpoints)
- Purposeful animations using Tailwind transitions and hover effects

### Backend Architecture

**Server Framework**
- **Express.js** as the web server
- Separate development (`index-dev.ts`) and production (`index-prod.ts`) entry points
- Custom logging middleware for request tracking

**Development vs Production**
- **Development**: Vite middleware integration with HMR support
- **Production**: Static file serving from pre-built `dist/public` directory

**API Design**
- RESTful endpoints under `/api` prefix
- JSON request/response format
- Zod schema validation for type-safe API contracts

**Session & State**
- In-memory storage implementation (`MemStorage`) for contact form submissions
- Interface-based storage abstraction (`IStorage`) allowing future database integration

### Data Storage Solutions

**Current Implementation**
- In-memory storage using JavaScript `Map` for contact submissions
- UUID-based identifiers for submissions
- Data persistence only during server runtime

**Prepared for Database Migration**
- **Drizzle ORM** configured with PostgreSQL dialect
- Schema definitions in `shared/schema.ts`
- Migration support via `drizzle-kit` with output to `/migrations` directory
- **Neon Database** serverless PostgreSQL connection ready via `@neondatabase/serverless`

**Data Models**
- Contact form submissions with name, email, message, and timestamp
- Portfolio data structure including hero, about, skills, projects, experience sections
- Zod schemas for runtime validation and TypeScript type inference

### Authentication and Authorization

**Current State**
- No authentication system implemented
- Contact form submissions are publicly accessible via API
- Admin endpoints (`/api/contact-submissions`) have no access control

**Security Considerations**
- Contact form endpoint validated with Zod schema
- Raw request body preserved for potential webhook signature verification
- CORS and session middleware ready via `connect-pg-simple` package

### Component Organization

**Page Structure**
- Single-page portfolio layout with sectioned content:
  - Hero/Landing section with CTA buttons
  - About section with stats and bio
  - Skills section with categorized technology badges
  - Projects section with featured project cards
  - Experience section with timeline layout
  - Contact section with form submission
  - Footer component

**Reusable Components**
- Comprehensive UI component library in `client/src/components/ui/`
- Theme toggle with system preference detection
- Navigation bar with scroll-aware active section tracking
- Mobile-responsive hamburger menu

### Build & Deployment Pipeline

**Development Workflow**
- `npm run dev`: Starts Vite dev server with Express backend
- Hot module replacement for instant feedback
- TypeScript type checking via `npm run check`

**Production Build**
- `npm run build`: 
  - Vite builds client assets to `dist/public`
  - esbuild bundles server code to `dist/index.js`
- `npm start`: Runs production server from bundled code

**Database Operations**
- `npm run db:push`: Push schema changes to database via Drizzle Kit

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, forms, etc.)
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variant management
- **tailwind-merge** & **clsx**: Utility class merging and conditional styling

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation

### Form & Validation
- **React Hook Form**: Performant form state management
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Validation resolver integration

### Development Tools
- **Replit plugins**: Development banner, error overlay, and cartographer for Replit environment
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds

### Styling Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformation with autoprefixer
- **tailwindcss-animate**: Animation utilities for Tailwind

### Utility Libraries
- **nanoid**: Unique ID generation for cache busting and identifiers
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Carousel/slider functionality