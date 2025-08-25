# Overview

This is a full-stack web application built as a news website with the title "Exército abre inscrições para novos CACs com processo 100% digital" (Army opens registrations for new CACs with 100% digital process). The application follows a modern architecture with a React frontend and Express backend, styled with Tailwind CSS and shadcn/ui components.

The project structure separates client-side code, server-side code, and shared components, indicating a well-organized monorepo approach. It appears to be designed for displaying news content with a mobile-first responsive design approach.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **Styling**: Tailwind CSS with shadcn/ui component library using the "new-york" style
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Build System**: Vite with React plugin and custom alias configuration

## Backend Architecture  
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module" in package.json)
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for server bundling with external packages handling
- **Storage Pattern**: Interface-based storage with in-memory implementation (extensible to database)

## Database & ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Provider**: Neon Database serverless driver
- **Schema Management**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database migrations

## Project Structure
- **Monorepo Layout**: Clear separation between client, server, and shared code
- **Shared Directory**: Common schema definitions and types accessible to both frontend and backend
- **Asset Management**: Dedicated attached_assets directory for media files
- **Configuration**: Centralized configuration files at root level

## Development & Deployment
- **Development Server**: Concurrent client and server development with hot reloading
- **Production Build**: Client assets bundled to dist/public, server bundled to dist/
- **Environment**: Replit-optimized with development banner and runtime error overlay
- **Type Checking**: Comprehensive TypeScript configuration with path mapping

## External Dependencies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Font Awesome 5.15.3 for iconography
- **Fonts**: Google Fonts (Roboto family)
- **Forms**: React Hook Form with Zod validation via hookform/resolvers
- **Build Tools**: Vite ecosystem with React support and Replit plugins
- **Date Handling**: date-fns for date manipulation
- **Development**: tsx for TypeScript execution, esbuild for bundling