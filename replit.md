# Overview

This is a full-stack personal portfolio website built for Soe Htet Linn, a Senior Odoo Developer. The application showcases professional experience, skills, and projects with an elegant, modern design. It features a single-page application (SPA) with smooth scrolling navigation, animated components, and a contact form for potential clients and employers.

The portfolio demonstrates expertise in ERP solutions, Python development, and modern web technologies while maintaining a professional aesthetic with dark theme styling and interactive elements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom dark theme and shadcn/ui component library
- **Navigation**: Single-page application using Wouter for lightweight routing
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Radix UI primitives with custom styling for accessibility

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with structured error handling
- **Request Processing**: Express middleware for JSON parsing, logging, and error handling
- **Development**: Hot module replacement with Vite integration for seamless development

## Data Layer
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL with connection pooling
- **Validation**: Zod schemas for runtime type checking and data validation
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback for development

## Component Structure
- **Layout**: Modular section-based components (Hero, About, Experience, Skills, Projects, Contact)
- **UI System**: Consistent design system with reusable components
- **Animation**: Custom CSS animations and typing effects for enhanced user experience
- **Responsive Design**: Mobile-first approach with adaptive layouts

## External Dependencies

- **Database**: Neon Database (PostgreSQL as a Service)
- **Email Service**: Contact form submission ready for email service integration
- **CDN**: Google Fonts for typography (Inter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific integrations for development environment