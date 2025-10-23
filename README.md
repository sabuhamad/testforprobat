# Modern Landing Page

A beautiful, responsive landing page built with React and TypeScript. Features modern design, smooth animations, and mobile-first responsive layout.

## Features

- 🚀 **Modern React with TypeScript** - Type-safe development
- 📱 **Fully Responsive** - Works on all devices
- 🎨 **Beautiful Design** - Modern UI with gradients and animations
- ⚡ **Fast Performance** - Optimized with Vite
- 🔧 **Easy to Customize** - Well-structured components

## Components

- **Header** - Navigation with mobile menu
- **Hero** - Eye-catching hero section with call-to-action
- **Features** - Showcase of key features with icons
- **Footer** - Complete footer with links and social media

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation component
│   ├── Header.css         # Header styles
│   ├── Hero.tsx           # Hero section
│   ├── Hero.css           # Hero styles
│   ├── Features.tsx       # Features section
│   ├── Features.css       # Features styles
│   ├── Footer.tsx         # Footer component
│   └── Footer.css         # Footer styles
├── App.tsx                # Main app component
├── App.css                # App styles
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## Customization

### Colors
The main color scheme uses a gradient from `#667eea` to `#764ba2`. You can customize this in the CSS files:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content
- Update the hero text in `src/components/Hero.tsx`
- Modify features in `src/components/Features.tsx`
- Change navigation links in `src/components/Header.tsx`
- Update footer content in `src/components/Footer.tsx`

### Styling
Each component has its own CSS file for easy customization. The design uses:
- CSS Grid and Flexbox for layout
- CSS custom properties for consistent spacing
- Smooth transitions and hover effects
- Mobile-first responsive design

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.
