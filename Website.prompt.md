# E-Commerce Platform with AI Integration

## Core Features

### 1. Home Page
- Branding and hero section
- Featured products or categories
- AI chatbot assistant for product inquiries

### 2. Product Shop
- Product listing with filters
- Full-text and fuzzy search
- Product detail pages
- Dynamic "request custom print" forms

### 3. User Accounts
- Sign up, login, and password reset
- Order history and saved preferences
- Newsletter opt-in toggle

### 4. Checkout & Payment
- Shopping cart and custom order flow
- Stripe integration for one-time and subscription billing
- Order confirmation email

### 5. AI Assistant (Chatbot)
- Embedded React chat widget
- Streams replies using OpenAI API
- Connected to product FAQ and support knowledge base
- Optionally suggest products or assist in ordering

### 6. Newsletter / Email
- Subscribe on registration or from footer
- Trigger campaigns on product release or blog post
- Sync subscribers with external services like ConvertKit or Mailchimp

### 7. Admin Dashboard (Future Phase)
- Add/edit products
- View orders and users
- Manage inventory and analytics

## Technology Stack
- Frontend: React, Next.js
- Backend: Node.js, Express, NestJS
- Database: PostgreSQL
- AI: LLM integrations locally or via API (OpenAI, etc.)
- Payment: Stripe

## Recommended Technology Stack Integrations

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

## Security Considerations
- HTTPS enforced via Cloudflare
- Rate limiting + validation on API endpoints
- Stripe webhook signing
- Environment secrets stored in .env files (managed via secret manager)

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

## Deliverables
- ✅ Fully responsive e-commerce frontend
- ✅ Admin and user login system
- ✅ Functional product search and filtering
- ✅ Secure Stripe payment flow
- ✅ AI-powered live chat widget
- ✅ Newsletter subscription integration
- ✅ Basic admin panel (Phase 2)


## Database Schema (PostgreSQL)
```sql

🧑 Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

📦 Products
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

🛒 Orders
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

📄 Order Items
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price_cents INTEGER NOT NULL
);

💬 AI Chat Logs
CREATE TABLE chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    message TEXT,
    response TEXT,
    source TEXT DEFAULT 'ai-assistant',
    created_at TIMESTAMP DEFAULT NOW()
);

📧 Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP DEFAULT NOW()
);

🏷️ Categories (Optional for Product Filters)
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL
);

🔐 Sessions (If you’re doing your own JWT or session handling)
-- Product-Category many-to-many relation
CREATE TABLE product_categories (
    product_id UUID REFERENCES products(id),
    category_id UUID REFERENCES categories(id),
    PRIMARY KEY (product_id, category_id)
);
