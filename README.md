# Manage – Project Management Landing Page

A modern, responsive landing page for Manage, a comprehensive team productivity and project management solution. Built with React and Vite for optimal performance and developer experience.

## 🎯 Overview

Manage is an all-in-one team productivity platform that helps organizations:
- Track company-wide progress with milestone and detail-level tracking
- Generate advanced built-in reports and maintain visibility
- Consolidate communication, file storage, task tracking, and document sharing in one place

## ✨ Features

- **Responsive Design** – Mobile-first layout that adapts seamlessly to all screen sizes
- **Smooth Scrolling Navigation** – Active section highlighting with smooth scroll-to behavior
- **Modern UI Components** – Reusable, modular component architecture
- **Performance Optimized** – Built with Vite for fast development and production builds
- **Accessibility Features** – Semantic HTML, ARIA labels, and keyboard navigation support

## 🛠️ Tech Stack

- **React 19.2** – UI framework
- **Vite 8.0** – Build tool and dev server
- **CSS Modules** – Scoped styling for component isolation
- **JavaScript (ES6+)** – Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd manage-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` – Start the development server with hot module reloading
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── Navbar.jsx     # Navigation bar with mobile menu
│   │   ├── HeroSection.jsx    # Hero/landing section
│   │   ├── FeaturesSection.jsx – Feature highlights
│   │   ├── TestimonialsSection.jsx – Customer testimonials
│   │   ├── CtaSection.jsx     # Call-to-action section
│   │   └── Footer.jsx         # Footer
│   ├── ui/                # Reusable UI components
│   │   ├── Button.jsx     # Button component
│   │   ├── FeatureItem.jsx    # Feature card
│   │   └── TestimonialCard.jsx – Testimonial card
│   └── [module.css files] – Scoped styles
├── hooks/
│   └── useScrollSpy.js    # Hook for active section detection
├── data/
│   └── data.js            # Static content and configuration
├── assets/                # Images and static assets
├── index.css              # Global styles
├── main.jsx               # React entry point
└── LandingPage.jsx        # Main page component
```

## 🎨 Components

### Layout Components
- **Navbar** – Responsive navigation with desktop and mobile menus, active section indicators
- **Footer** – Site footer with links and information

### Section Components
- **HeroSection** – Eye-catching landing section
- **FeaturesSection** – Highlights key product features
- **TestimonialsSection** – Customer success stories and reviews
- **CtaSection** – Call-to-action for user engagement

### UI Components
- **Button** – Customizable button with variants
- **FeatureItem** – Card component for feature display
- **TestimonialCard** – Card component for testimonials

## 🎯 Development Workflow

1. **Components** are modular and self-contained with their own styles
2. **CSS Modules** are used for component-scoped styling to avoid conflicts
3. **Custom Hooks** like `useScrollSpy` provide reusable logic
4. **Data** is centralized in `data.js` for easy content management

## 🚀 Deployment

Build the app for production:
```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment to any static hosting service.

## 📝 Contributing

When adding new features:
1. Create components in appropriate directories (`sections/` or `ui/`)
2. Use CSS Modules for styling to maintain encapsulation
3. Keep components small and reusable
4. Add proper accessibility attributes (ARIA labels, roles, etc.)
5. Run `npm run lint` to check code quality

## 📄 License

This project is private and proprietary.
