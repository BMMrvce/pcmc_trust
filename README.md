# PCMC Trust - Modern NGO Website

A modern, redesigned website for Parvathamma Channajamma Memorial Charitable Trust built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Modern, responsive design
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for beautiful styling
- ✅ React Router for navigation
- ✅ Component-based architecture
- ✅ Mobile-friendly navigation
- ✅ All original content preserved
- ✅ Matching navigation structure
- ✅ Smooth animations and transitions

## Technology Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── AboutUs.tsx
│   ├── ActivitiesOfTrust.tsx
│   ├── PhotoGallery.tsx
│   ├── WaysToHelp.tsx
│   ├── PressEvents.tsx
│   ├── ContactUs.tsx
│   ├── about/          # About sub-pages
│   ├── activities/     # Activities sub-pages
│   ├── help/          # Ways to help sub-pages
│   └── press/         # Press & events sub-pages
├── App.tsx            # Main app component with routes
├── main.tsx           # Application entry point
└── index.css          # Global styles

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd /home/tantravruksha/Documents/pgt-ext
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Pages

### Main Pages
- **Home** - Landing page with organization overview
- **About Us** - Information about the trust
  - Who We Are
  - How It Evolved
  - Mission
  - Legal & Financial
- **Activities of Trust** - All charitable activities
  - Medical Programmes (Dental Camp, General Health Camp, Medical Helpline)
  - Trust Camp Activities
  - Eye Camps
  - Blood Camps
  - Veterinary Camps
  - Educational Programmes
  - Social Programmes
  - Awareness Programmes
- **Photo Gallery** - Images from events and programs
- **Ways to Help** - How to support the trust
  - Volunteer
  - Donate
  - Spread the Word
- **Press & Events** - Media coverage and events
  - PCMC Trust in Media
- **Contact Us** - Contact information and form

## Design Features

### Color Scheme
- Primary: Red tones (honoring original theme)
- Secondary: Green tones
- Neutral: Grays for text and backgrounds

### Typography
- Headings: Poppins font family
- Body: Inter font family

### Components
- Modern card-based layouts
- Responsive navigation with mobile menu
- Hover effects and transitions
- Icon integration with Lucide React
- Gradient backgrounds
- Shadow effects for depth

## Customization

### Updating Colors
Edit the Tailwind configuration in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Modifying Content
- All page content is in the respective component files
- Edit JSX directly in component files
- Images can be placed in `public/` directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The built website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Notes

- All original content from the previous website has been preserved
- Navigation structure remains unchanged
- The website is fully responsive and mobile-friendly
- TypeScript ensures type safety throughout the application
- Tailwind CSS provides consistent, maintainable styling

## Support

For any questions or issues, please contact the development team or open an issue in the repository.

## License

This project is created for Parvathamma Channajamma Memorial Charitable Trust.
