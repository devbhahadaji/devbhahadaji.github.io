# Professional Portfolio Website

A modern, responsive portfolio website built with Jekyll and deployed on GitHub Pages. This portfolio showcases your skills as a fullstack web developer with dynamic content management through `_config.yml`.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Modern CSS**: Uses CSS Grid, Flexbox, and CSS Variables for maintainable styles
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Dark Mode**: Toggle between light and dark themes
- **Professional Typography**: Uses Inter font for clean, professional look

### ⚡ Dynamic Functionality
- **Project Filtering**: Filter projects by technology with smooth animations
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Contact Form**: Functional contact form with validation and success handling
- **Mobile Menu**: Responsive navigation with hamburger menu
- **Back to Top**: Smooth scroll to top functionality
- **Typing Animation**: Dynamic typing effect for hero section

### 🛠 Technical Excellence
- **Jekyll-Powered**: Static site generator for fast, secure websites
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Performance Optimized**: Lazy loading, compressed assets, and efficient code
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Cross-Browser**: Compatible with all modern browsers

### 📱 Content Management
- **Dynamic Configuration**: Manage all content through `_config.yml`
- **Easy Updates**: Update projects, skills, experience without touching code
- **Modular Structure**: Organized includes and layouts for maintainability

## 🚀 Quick Start

### Prerequisites
- Ruby 2.7+ (for local development)
- Git
- GitHub account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```
   
4. **Open in browser**
   ```
   http://localhost:4000
   ```

### GitHub Pages Deployment

1. **Fork or create repository**
   - Fork this repository or create a new one named `yourusername.github.io`

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will auto-deploy on push to main/master

3. **Configure your site**
   - Edit `_config.yml` with your information
   - Add your images to `assets/images/`
   - Commit and push changes

## 📝 Customization Guide

### Personal Information
Edit the following sections in `_config.yml`:

```yaml
# Basic Info
title: "Your Title"
name: "Your Name"
description: "Your description"
email: "your.email@example.com"
profile_image: "/assets/images/your-photo.jpg"
```

### Projects
Add your projects to the `projects` section:

```yaml
projects:
  - title: "Project Name"
    description: "Project description"
    image: "/assets/images/projects/project.jpg"
    technologies: ["React", "Node.js", "MongoDB"]
    github_url: "https://github.com/yourusername/project"
    demo_url: "https://your-project.vercel.app"
    featured: true
    status: "completed"
```

### Skills
Update the `skills` section:

```yaml
skills:
  - category: "Frontend"
    items: ["React", "Vue.js", "JavaScript", "CSS3"]
  - category: "Backend"
    items: ["Node.js", "Python", "Django", "Express"]
```

### Experience
Add your work experience:

```yaml
experience:
  - position: "Job Title"
    company: "Company Name"
    duration: "2022 - Present"
    description: "Job description"
    achievements:
      - "Achievement 1"
      - "Achievement 2"
```

### Social Links
Configure your social media:

```yaml
social:
  - name: "GitHub"
    url: "https://github.com/yourusername"
    icon: "fab fa-github"
  - name: "LinkedIn"
    url: "https://linkedin.com/in/yourusername"
    icon: "fab fa-linkedin"
```

### Contact Form
Set up the contact form:

1. **Create Formspree account**: https://formspree.io
2. **Get your form endpoint**
3. **Update _config.yml**:
   ```yaml
   contact:
     form_action: "https://formspree.io/f/your-form-id"
   ```

### Images
Add your images to the appropriate folders:

```
assets/images/
├── profile.jpg              # Your profile photo
├── projects/
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
└── favicon.ico             # Site favicon
```

### Colors and Styling
Customize the theme in `_config.yml`:

```yaml
theme:
  primary_color: "#2563eb"
  secondary_color: "#64748b"
  accent_color: "#f59e0b"
  dark_mode: true
```

## 🎯 Advanced Configuration

### Google Analytics
Add your tracking ID:

```yaml
google_analytics: "GA_TRACKING_ID"
```

### SEO Settings
The site includes comprehensive SEO features:
- Meta tags
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap generation

### Custom Domain
To use a custom domain:

1. **Add CNAME file** with your domain
2. **Configure DNS** with your domain provider
3. **Update _config.yml**:
   ```yaml
   url: "https://yourdomain.com"
   baseurl: ""
   ```

### Performance Features
- **Lazy loading** for images
- **Minified CSS/JS** in production
- **Compressed assets**
- **Efficient caching**

## 📁 Project Structure

```
portfolio/
├── _config.yml              # Main configuration file
├── _layouts/
│   └── default.html         # Main layout template
├── _includes/
│   ├── head.html           # HTML head section
│   ├── navigation.html     # Navigation bar
│   ├── hero.html          # Hero section
│   ├── about.html         # About section
│   ├── projects.html      # Projects section
│   ├── experience.html    # Experience section
│   ├── contact.html       # Contact section
│   └── footer.html        # Footer section
├── assets/
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Image assets
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml  # GitHub Actions workflow
├── index.html             # Homepage
├── thank-you.html         # Thank you page
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## 🔧 Development

### Local Setup
```bash
# Install Ruby dependencies
bundle install

# Start development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Adding New Sections
1. Create a new include file in `_includes/`
2. Add the section to `index.html`
3. Style in `assets/css/main.css`
4. Add any interactive features in `assets/js/main.js`

### Customizing Styles
The CSS uses CSS Custom Properties (variables) for easy customization:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  /* ... */
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Site not building**
   - Check `_config.yml` syntax
   - Ensure all required fields are filled
   - Check GitHub Actions logs

2. **Images not displaying**
   - Verify image paths in `_config.yml`
   - Ensure images are in `assets/images/`
   - Check file extensions and naming

3. **Contact form not working**
   - Verify Formspree endpoint
   - Check form action URL
   - Ensure required fields are marked

### Support
- 📧 **Email**: Contact through the portfolio form
- 🐛 **Issues**: Open an issue on GitHub
- 💬 **Discussions**: Use GitHub Discussions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Jekyll** - Static site generator
- **GitHub Pages** - Free hosting
- **Font Awesome** - Icons
- **Google Fonts** - Typography
- **Formspree** - Contact form handling

## 🔗 Live Demo

Check out the live demo at: [https://yourusername.github.io/portfolio](https://yourusername.github.io/portfolio)

---

**Built with ❤️ for developers who want to showcase their work professionally.**