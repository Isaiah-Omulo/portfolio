# Isaiah Ngare Omulo - Professional Portfolio

A modern, responsive, and professional portfolio website built with HTML5, CSS3, Bootstrap 5, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Bootstrap 5**: Leverages Bootstrap 5 for consistent styling and components
- **Font Awesome Icons**: Beautiful icons throughout the site
- **Smooth Scrolling**: Smooth navigation between sections
- **Active Navigation**: Highlights current section in navigation
- **Scroll-to-Top Button**: Quick navigation back to the top
- **Print-Friendly**: Optimized for printing
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## File Structure

```
isaiah-portfolio-simple/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript interactivity
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Sections

1. **Navigation**: Sticky navigation bar with smooth scrolling
2. **Hero Section**: Eye-catching introduction with call-to-action buttons
3. **About**: Professional summary and key highlights
4. **Skills**: Technical skills organized by category
5. **Experience**: Work experience with detailed descriptions
6. **Education & Projects**: Education history and side projects
7. **Contact**: Contact information and social links
8. **Footer**: Copyright information

## How to Use

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

### Customization

Edit the following files to customize your portfolio:

- **index.html**: Update personal information, experience, skills, and projects
- **styles.css**: Modify colors, fonts, and styling
- **script.js**: Add additional interactivity or features

### Color Scheme

The portfolio uses a professional blue color scheme:
- Primary Color: `#0d6efd` (Bootstrap Blue)
- Secondary Color: `#6c757d` (Gray)
- Success Color: `#198754` (Green)
- Info Color: `#0dcaf0` (Cyan)

To change colors, modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* ... other colors ... */
}
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon and select **New repository**
3. Name it: `portfolio` (or any name you prefer)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Push Your Code to GitHub

```bash
# Navigate to your project directory
cd isaiah-portfolio-simple

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main**
   - **Folder**: Select **/ (root)**
5. Click **Save**

### Step 4: Access Your Portfolio

Your portfolio will be live at:
- `https://USERNAME.github.io/portfolio/`

Replace `USERNAME` with your actual GitHub username.

**Note**: If your repository is named `USERNAME.github.io`, it will be served at `https://USERNAME.github.io/` (without `/portfolio/`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: No heavy frameworks, just vanilla HTML/CSS/JS
- **Fast Loading**: Minimal dependencies (only Bootstrap and Font Awesome from CDN)
- **Optimized Images**: No images in the portfolio (uses CSS and icons)
- **Mobile-First**: Responsive design prioritizes mobile experience

## Customization Tips

### Change Your Name and Title

Edit the `<title>` tag and hero section in `index.html`:

```html
<title>Your Name - Your Title</title>
<h1 class="display-4 fw-bold mb-3">Your Name</h1>
<p class="lead mb-4">Your Title</p>
```

### Update Contact Information

Find the contact section and update:
- Email: `omulodeveloper@gmail.com`
- Phone: `+254746282760`
- GitHub: `https://github.com/Isaiah-Omulo`

### Add More Skills

Add new skill cards in the Skills section:

```html
<div class="col-md-6 col-lg-4">
    <div class="card skill-card border-0 shadow-sm h-100">
        <div class="card-body">
            <h5 class="card-title mb-3"><i class="fas fa-icon"></i> Skill Category</h5>
            <div class="skill-tags">
                <span class="badge bg-primary">Skill 1</span>
                <span class="badge bg-primary">Skill 2</span>
            </div>
        </div>
    </div>
</div>
```

### Modify Colors

Update the CSS variables in `styles.css` to match your brand:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

## Troubleshooting

### Portfolio not showing on GitHub Pages?

1. Wait 1-2 minutes for GitHub Pages to build and deploy
2. Check the **Actions** tab in your repository to see deployment status
3. Verify that GitHub Pages is enabled in Settings > Pages
4. Clear your browser cache and refresh

### Styling looks broken?

1. Check that all CSS and JS files are in the same directory as `index.html`
2. Verify that Bootstrap and Font Awesome CDN links are accessible
3. Open browser console (F12) to check for errors

### Links not working?

1. Ensure all internal links use `#section-id` format
2. Verify that section IDs match the link references
3. Check that the navbar is properly configured

## License

This portfolio template is free to use and modify for personal and commercial purposes.

## Support

For issues or questions:
1. Check the browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure you're using a modern web browser

## Credits

- **Bootstrap 5**: https://getbootstrap.com
- **Font Awesome**: https://fontawesome.com
- **Google Fonts**: https://fonts.google.com

---

**Last Updated**: October 2025

Enjoy your new portfolio! 🚀
