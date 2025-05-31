# GitHub Copilot Instructions for Kybernetx E-Commerce Platform

## Project Overview
This is an AI-powered e-commerce platform with the following key features:
- Product catalog with search and filtering
- AI chatbot assistant for customer support
- User authentication and order management
- Stripe payment integration
- Newsletter subscription system
- Admin dashboard for product and order management

## Technology Stack
- **Frontend**: React 18 + Vite + JavaScript/JSX
- **Styling**: CSS with modern features (flexbox, grid, custom properties)
- **Backend**: Planning to migrate to Next.js + NestJS/Node.js + TypeScript
- **Database**: PostgreSQL (future implementation)
- **AI Integration**: OpenAI API for chatbot functionality
- **Payment**: Stripe integration
- **Deployment**: GitHub Pages (current), Vercel (planned)

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

## Security Considerations
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

