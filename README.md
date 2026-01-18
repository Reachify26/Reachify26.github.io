# Portfolio Website

A modern, responsive portfolio website with an attractive and playful landing page, featuring professional sections for showcasing your skills, projects, experience, and business services.

## Features

- **Engaging Landing Page**: Animated background with floating particles, gradient animations, and smooth entrance effects
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Professional Sections**: 
  - About Me
  - Skills
  - Projects Portfolio
  - Work Experience Timeline
  - Education
  - Business Services
  - Contact Information
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Form validation
  - Scroll-triggered animations
  - Hover effects and transitions
- **Business Section**: Dedicated section with business description and contact form for client inquiries

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone or download this repository
2. Open the project folder
3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

### Using a Local Server (Recommended)

For the best experience when developing locally, a local server is recommended.

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` (or the port shown) in your browser.

## Customization Guide

### Personal Information

1. **Hero Section** (`index.html`):
   - Update the name in `.title-name`: Replace "Your Name" with your actual name
   - Update the role in `.title-role`: Replace "Full Stack Developer" with your role
   - Update the subtitle in `.hero-subtitle`: Customize the tagline

2. **About Section**:
   - Edit the paragraph text in `.about-text` to describe yourself

3. **Contact Section**:
   - Update the email address: Replace `your.email@example.com` with your actual email

### Skills Section

Edit the skills in `index.html` within the `.skills-grid`:
- Update skill categories (Frontend, Backend, Design, Tools)
- Modify the skills listed in each skill card
- Change icons by replacing emoji characters (💻, ⚙️, 🎨, 🚀)

### Projects

Add or modify projects in the `.projects-grid`:
- Update project titles
- Add project descriptions
- Modify technology tags
- Update project links (replace `#` with actual project URLs)
- Add project images by replacing the `.project-placeholder` div

### Colors and Styling

Edit CSS variables in `styles.css` at the `:root` selector:

```css
:root {
    --primary-color: #6366f1;      /* Primary brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #ec4899;       /* Accent color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    /* ... */
}
```

You can also customize gradients by modifying the gradient variables.

### Fonts

The website uses Google Fonts (Poppins). To change the font:

1. Update the font link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

2. Update the font-family in `styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Logo

Replace the logo text in the navigation:
```html
<div class="logo">
    <a href="#home">Your Logo</a>
</div>
```

Or add an image logo:
```html
<div class="logo">
    <a href="#home"><img src="path/to/logo.png" alt="Logo"></a>
</div>
```

### Social Media Links

Update social media links in the footer:
```html
<div class="social-links">
    <a href="your-linkedin-url" aria-label="LinkedIn">LinkedIn</a>
    <a href="your-github-url" aria-label="GitHub">GitHub</a>
    <a href="your-twitter-url" aria-label="Twitter">Twitter</a>
</div>
```

## File Structure

```
Portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Form (Formspree)
The contact form on this website is fully functional and powered by **Formspree**.

### How it works
- The form submits directly to Formspree using a standard HTML POST request
- No JavaScript email handling is required
- Formspree delivers messages to the configured email address

### Configuration
The form is connected using the following markup in `index.html`:

```html
<form
  id="business-form"
  class="business-form"
  action="https://formspree.io/f/xreeprqe"
  method="POST"
>
```

### Option 3: Custom Backend

Create a backend API endpoint to handle form submissions and update the JavaScript accordingly.

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings > Pages
4. Select the main branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be deployed instantly

### Vercel

1. Sign up at [Vercel](https://vercel.com/)
2. Import your repository
3. Deploy with one click

## Tips

- Replace all placeholder content with your actual information
- Use high-quality images for projects
- Test the website on different devices and browsers
- Keep your content updated and relevant
- Add your actual project links and GitHub repositories
- Consider adding a favicon for a professional touch

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please check the code comments or create an issue in the repository.

---

**Enjoy building your portfolio!** 🚀








