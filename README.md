
# Health Care Application

## Introduction

This is a modern health care application built with Next.js that helps users track their health, manage their diet, and monitor their body records. The application features a clean, responsive design with an intuitive user interface that makes health tracking accessible and engaging.

The app provides comprehensive health management tools including meal tracking, body record monitoring, and access to health-related articles and recommendations.

## How to Run in Development Mode

To get started with the development environment:

1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Main Application Routes

The application features three main pages:

1. **`/my-page`** - Personal dashboard where users can view their meal tracking, food diary, and personal health statistics with hexagonal meal cards for an engaging visual experience.

2. **`/record`** - Health records section featuring body record graphs, exercise tracking, and diary entries to monitor health progress over time.

3. **`/columns`** - Health articles and educational content with recommended categories and informative articles to help users make informed health decisions.

## Performance Improvements

I've implemented several optimization strategies to enhance application performance:

- **Hexagonal Design Components**: Custom hexagonal meal cards that provide an efficient and visually appealing way to display meal information while maintaining optimal rendering performance.

- **Custom Hooks**: Implemented specialized hooks (`useAuth`, `useArticles`, `useCategories`, `useNavigation`) to manage state efficiently, reduce re-renders, and provide reusable logic across components.

- **Component Optimization**: Structured components for optimal bundle splitting and lazy loading to improve initial page load times.

## Authentication System

The application features a robust authentication system:

- **Login Form**: Clean and accessible login interface with proper form validation and user feedback.

- **Zustand State Management**: Utilizes Zustand for lightweight and efficient client-side authentication state management, providing:
  - Persistent login state
  - Seamless user session handling
  - Optimized re-renders
  - Simple and predictable state updates

- **Protected Routes**: Implemented route protection to ensure secure access to user-specific content.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Thank You

Thank you for taking the time to review this health care application. I appreciate your interest in the project and hope you find the implementation and architecture decisions valuable. Your feedback and contributions are always welcome!
