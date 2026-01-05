# Jensen Omega Portfolio - React Version

This is a React conversion of the original HTML portfolio website for Jensen Omega, a software developer.

## Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: CSS animations and transitions for better UX
- **Component-Based**: Modular components for easy maintenance
- **Accessibility**: Proper ARIA labels and semantic HTML

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Google Fonts**: Poppins font family
- **Material Symbols**: Google's icon font

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Header navigation
│   ├── Hero.jsx         # Hero section with profile
│   ├── About.jsx        # About me section
│   ├── Skills.jsx       # Skills and technologies
│   ├── Projects.jsx     # Project showcase
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx      # Contact form and info
│   ├── Footer.jsx       # Footer with links
│   └── ThemeToggle.jsx  # Dark/light theme toggle
├── App.jsx              # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Key Differences from Original HTML

1. **Component Architecture**: Split into reusable React components
2. **State Management**: React hooks for theme toggle and form handling
3. **Modern Icons**: Replaced Material Icons with Lucide React where possible
4. **Improved Accessibility**: Better form handling and ARIA labels
5. **Optimized Performance**: Vite build system for faster loading

## Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update text and images in individual components
- **Styling**: Adjust styles using Tailwind classes
- **Animations**: Customize animations in the Tailwind config

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes