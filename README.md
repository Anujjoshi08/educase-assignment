# Project

This is a small React + Vite app built for the Educase Assignment. It contains a welcome screen, login form, registration form, and a profile/account settings page.

## Features

- Welcome screen with bottom-aligned call-to-action buttons
- Login screen with responsive layout that stays mobile-friendly and centers on larger screens
- Registration screen with required form fields and agency selection
- Account settings/profile screen with user details and avatar card
- React Router based navigation between pages

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS v4

## Project Structure

- `src/pages/Home.jsx` - welcome page
- `src/pages/Login.jsx` - login page
- `src/pages/SignUp.jsx` - registration page
- `src/pages/AccountSettings.jsx` - profile page
- `src/components` - reusable UI components
- `src/routes` - application routes

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Assets

Static assets are stored in `public/`. The site favicon is configured from `public/site-favicon.png`.

## Notes

- The app uses route-based navigation for the full experience.
- The mobile layout is preserved while desktop screens use centered alignment where needed.
- Tailwind theme colors are defined in `src/index.css`.
