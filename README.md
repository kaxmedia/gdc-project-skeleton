# GDC Project Skeleton

This is a basic Laravel project setup with Vue.js and TailwindCSS integration, featuring a review component with authentication.

## Features

- Laravel 10.x
- Vue 3.x
- TailwindCSS 3.x
- Responsive design
- Authentication system
- Interactive review component
- Dynamic rating system
- Animated gradient background

## Requirements

- PHP 8.1 or higher
- Node.js 18.x or higher (Required for Vite and Vue 3)
- Composer
- NPM 8.x or higher

## Installation

1. Clone the repository
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install Node.js dependencies:
   ```bash
   npm install
   ```
4. Copy .env.example to .env and configure your environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
5. Add the following authentication variables to your .env file:
   ```
   VITE_AUTH_USERNAME=your_username
   VITE_AUTH_PASSWORD=your_password
   ```
6. Start the development server:
   ```bash
   php artisan serve
   ```
7. In a separate terminal, start Vite:
   ```bash
   npm run dev
   ```
8. For production deployment:
   ```bash
   npm run build
   ```

## Development

- Main application entry point: `resources/js/app.js`
- Vue components are located in: `resources/js/components/`
- Blade templates are in: `resources/views/`
- CSS styles are in: `resources/css/app.css`

### Authentication

The application uses a simple authentication system with environment variables. Users need to sign in with the credentials specified in the .env file. Authentication state is maintained using localStorage with a 12-hour expiration.

### Review Component

The review component (`Welcome.vue`) features:
- Star rating display
- Detailed review metrics
- Toggle functionality for detailed reviews
- Responsive design with Tailwind CSS
- Animated gradient background
- Interactive progress bars

## Troubleshooting

If you encounter any issues:

1. Make sure you're using Node.js 18.x or higher
2. Clear your node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
3. Rebuild your assets:
   ```bash
   npm run build
   ```
4. Check that all required environment variables are set in your .env file

## License

This project is open-sourced software licensed under the MIT license.
