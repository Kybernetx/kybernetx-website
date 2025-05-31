# GitHub Copilot Instructions for Kybernetx E-Commerce Platform

## Project Overview
This is an AI-powered e-commerce platform with the following key features:
- Product catalog with search and filtering
- AI chatbot assistant for customer support
- User authentication and order management
- Stripe payment integration
- Newsletter subscription system
- Admin dashboard for product and order management

### Core Features Implementation Plan

#### 1. Home Page
- Branding and hero section
- Featured products or categories
- AI chatbot assistant for product inquiries

#### 2. Product Shop
- Product listing with filters
- Full-text and fuzzy search
- Product detail pages
- Dynamic "request custom print" forms

#### 3. User Accounts
- Sign up, login, and password reset
- Order history and saved preferences
- Newsletter opt-in toggle

#### 4. Checkout & Payment
- Shopping cart and custom order flow
- Stripe integration for one-time and subscription billing
- Order confirmation email

#### 5. AI Assistant (Chatbot)
- Embedded React chat widget
- Streams replies using OpenAI API
- Connected to product FAQ and support knowledge base
- Optionally suggest products or assist in ordering

#### 6. Newsletter / Email
- Subscribe on registration or from footer
- Trigger campaigns on product release or blog post
- Sync subscribers with external services like ConvertKit or Mailchimp

#### 7. Admin Dashboard (Future Phase)
- Add/edit products
- View orders and users
- Manage inventory and analytics

## Technology Stack
- **Frontend**: React 18 + Vite + JavaScript/JSX (current), Next.js + React (planned)
- **Styling**: CSS with modern features (flexbox, grid, custom properties), Tailwind CSS + ShadCN + Radix UI (planned)
- **Backend**: Planning to migrate to NestJS (Node.js + TypeScript)
- **Database**: PostgreSQL (future implementation via Supabase/Neon)
- **Search**: Meilisearch / Typesense for full-text search
- **AI Integration**: OpenAI API / Claude / Local LLM for chatbot functionality
- **Payment**: Stripe integration (one-time and subscription billing)
- **Newsletter**: ConvertKit / Resend / Mailchimp integration
- **Authentication**: Custom JWT Auth via NestJS or Supabase Auth
- **Deployment**: GitHub Pages (current), Vercel (Frontend) + Railway/Render (Backend)
- **DNS & CDN**: Cloudflare for fast global delivery and security
- **DevOps**: GitHub Actions + Docker for CI/CD automation

### Recommended Technology Stack Rationale
| Layer | Technology | Reasoning |
|-------|------------|-----------|
| Frontend | Next.js (App Router) + React | Full control, SSR/SSG, best for SEO and scalability |
| Styling/UI | Tailwind CSS + ShadCN + Radix UI | Modular, accessible, customizable |
| Backend API | NestJS (Node.js + TypeScript) | Scalable, maintainable, AI-friendly architecture |
| Database | PostgreSQL (via Supabase/Neon) | Relational, future-proof, works well with typed ORMs |
| Authentication | Custom JWT Auth via NestJS or Supabase Auth | Flexible auth control |
| Search | Meilisearch / Typesense | Fast, self-hosted full-text search |
| Payments | Stripe | Industry standard, secure, supports subscriptions |
| AI Integration | OpenAI API / Claude / Local LLM | Powers the web chat and product recommendation logic |
| Newsletter | ConvertKit / Resend / Mailchimp | Email marketing and subscriber management |
| Hosting | Vercel (Frontend), Railway/Render (Backend) | Scalable deployments |
| DNS & CDN | Cloudflare | Fast global delivery, domain/DNS management, security |
| DevOps | GitHub Actions + Docker | CI/CD automation, portability |
| Optional CMS | Sanity.io (for marketing pages) | For content management if desired |

## Coding Standards

### React/JSX Guidelines
- Use functional components with hooks
- Prefer arrow functions for component definitions
- Use descriptive component and variable names
- Keep components small and focused on single responsibility
- Use React.Fragment or `<>` for multiple elements

### Styling Preferences
- Use CSS modules or inline styles for component-specific styling
- Prefer flexbox and CSS Grid for layouts
- Use semantic HTML elements
- Ensure responsive design (mobile-first approach)
- Use CSS custom properties for theming

### Brand Color Palette
Use this desert-inspired color theme consistently throughout the application:
- **Primary (Forest Green)**: `#2E4A32` - Deep, grounded color for primary actions and branding
- **Neutral Base (Charcoal Gray)**: `#3A3A3A` - Strong, versatile base for structure and text
- **Accent (Desert Clay)**: `#C98A64` - Warm adobe tone for highlights and call-to-actions
- **Light Neutral (Warm Sand)**: `#D9CBB2` - Soft sandy tone for backgrounds and balance
- **Soft White (Sand Dune Mist)**: `#F6F2E8` - Refined off-white for clean, natural backgrounds

```css
:root {
  --color-primary: #2E4A32;
  --color-neutral-base: #3A3A3A;
  --color-accent: #C98A64;
  --color-light-neutral: #D9CBB2;
  --color-soft-white: #F6F2E8;
}
```

### Code Organization
- Components should be in `/src/components/` directory
- Use PascalCase for component filenames (e.g., `HeroSection.jsx`)
- Group related functionality together
- Prefer named exports over default exports for utilities

### Performance Considerations
- Use lazy loading for images and components where appropriate
- Minimize bundle size
- Optimize for Core Web Vitals
- Use proper alt tags for images

## AI Integration Guidelines
- When implementing chatbot features, use streaming responses
- Store chat logs for user sessions
- Implement proper error handling for AI API calls
- Consider rate limiting for AI endpoints

## Future Migration Notes
- Prepare code for TypeScript migration (use proper prop types)
- Structure components for easy Next.js App Router migration
- Design with server-side rendering in mind
- Plan for database integration with proper data modeling

## Database Schema (PostgreSQL)

### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Products Table
```sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    price_cents INTEGER NOT NULL,
    currency TEXT DEFAULT 'USD',
    category TEXT,
    image_url TEXT,
    inventory_count INTEGER DEFAULT 0,
    customizable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Orders Table
```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    status TEXT CHECK (status IN ('pending', 'paid', 'shipped', 'cancelled')) DEFAULT 'pending',
    total_cents INTEGER NOT NULL,
    currency TEXT DEFAULT 'USD',
    stripe_payment_id TEXT,
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Order Items Table
```sql
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price_cents INTEGER NOT NULL
);
```

### AI Chat Logs Table
```sql
CREATE TABLE chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    message TEXT,
    response TEXT,
    source TEXT DEFAULT 'ai-assistant',
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Newsletter Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP DEFAULT NOW()
);
```

### Categories Table (Optional for Product Filters)
```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL
);

-- Product-Category many-to-many relation
CREATE TABLE product_categories (
    product_id UUID REFERENCES products(id),
    category_id UUID REFERENCES categories(id),
    PRIMARY KEY (product_id, category_id)
);
```

## Scalability Strategy
- Use edge caching (Cloudflare) and static generation for marketing content
- Containerize backend with Docker for easy migration to Kubernetes or VPS
- PostgreSQL supports indexing, transactions, and long-term scaling
- Stateless APIs + token-based auth make horizontal scaling trivial

## Future-Proofing and AI Readiness
- Modular component-based frontend (AI-friendly)
- Schema-defined API with NestJS (ideal for codegen and testing)
- Option to add LangChain or RAG (retrieval-augmented generation) with vector DBs for smarter chat
- Easily swap AI provider (OpenAI, Claude, Mistral, etc.)

## Security Considerations (Enhanced)
- HTTPS enforced via Cloudflare
- Rate limiting + validation on API endpoints
- Stripe webhook signing
- Environment secrets stored in .env files (managed via secret manager)
- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Implement proper input validation
- Follow secure authentication patterns

## Testing Preferences
- Write unit tests for utility functions
- Use React Testing Library for component tests
- Test user interactions and edge cases
- Mock external API calls in tests

## Accessibility Requirements
- Ensure keyboard navigation works properly
- Use proper ARIA labels and roles
- Maintain good color contrast ratios
- Support screen readers

## Comments and Documentation
- Add JSDoc comments for complex functions
- Document component props and their types
- Explain business logic with inline comments
- Keep README.md updated with setup instructions

## File Naming Conventions
- Use kebab-case for CSS files
- Use PascalCase for React components
- Use camelCase for JavaScript utilities
- Use lowercase for configuration files

