# 🚀 Quick Setup Guide

Get your portfolio up and running in minutes!

## 1. Initial Setup

### Option A: Using the Development Script (Recommended)
```bash
# Install dependencies and start development server
./dev.sh serve
```

### Option B: Manual Setup
```bash
# Install Ruby dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

Your portfolio will be available at `http://localhost:4000`

## 2. Customize Your Content

### Update Personal Information
Edit `_config.yml` and update:
- `name`: Your full name
- `title`: Your professional title
- `description`: Brief description about you
- `email`: Your contact email
- `profile_image`: Path to your profile photo

### Add Your Projects
In the `projects` section of `_config.yml`, add your projects:

```yaml
projects:
  - title: "Your Project Name"
    description: "Brief description of your project"
    image: "/assets/images/projects/your-project.jpg"
    technologies: ["React", "Node.js", "MongoDB"]
    github_url: "https://github.com/yourusername/project"
    demo_url: "https://your-project.vercel.app"
```

### Update Your Skills
Modify the `skills` section:

```yaml
skills:
  - category: "Frontend"
    items: ["React", "Vue.js", "JavaScript", "CSS3"]
```

### Add Work Experience
Update the `experience` section:

```yaml
experience:
  - position: "Your Job Title"
    company: "Company Name"
    duration: "2022 - Present"
    description: "What you did in this role"
```

### Configure Social Links
Update the `social` section:

```yaml
social:
  - name: "GitHub"
    url: "https://github.com/yourusername"
    icon: "fab fa-github"
```

## 3. Add Your Images

1. **Profile Photo**: Add to `assets/images/profile.jpg`
2. **Project Screenshots**: Add to `assets/images/projects/`
3. **Favicon**: Add to `assets/images/favicon.ico`

## 4. Deploy to GitHub Pages

### Create Repository
1. Create a new repository named `yourusername.github.io`
2. Push your code to the repository

### Enable GitHub Pages
1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The site will auto-deploy when you push changes

### Access Your Site
Your portfolio will be live at:
- `https://yourusername.github.io` (if repository is named `yourusername.github.io`)
- `https://yourusername.github.io/portfolio` (if repository is named `portfolio`)

## 5. Set Up Contact Form

1. **Create Formspree Account**: Visit [formspree.io](https://formspree.io)
2. **Create New Form**: Get your form endpoint
3. **Update _config.yml**:
   ```yaml
   contact:
     form_action: "https://formspree.io/f/your-form-id"
   ```

## 6. Optional Enhancements

### Google Analytics
Add your tracking ID:
```yaml
google_analytics: "GA_TRACKING_ID"
```

### Custom Domain
1. Add `CNAME` file with your domain
2. Configure DNS with your domain provider
3. Update `_config.yml`:
   ```yaml
   url: "https://yourdomain.com"
   baseurl: ""
   ```

### Dark Mode
Enable dark mode toggle:
```yaml
theme:
  dark_mode: true
```

## 7. Development Commands

```bash
# Install dependencies
./dev.sh install

# Start development server
./dev.sh serve

# Build for production
./dev.sh build

# Validate configuration
./dev.sh validate

# Optimize images
./dev.sh optimize

# Clean build files
./dev.sh clean
```

## 🎯 Pro Tips

1. **Images**: Keep images under 500KB for faster loading
2. **Content**: Write clear, concise descriptions for projects
3. **SEO**: Update meta descriptions and titles in `_config.yml`
4. **Mobile**: Test your site on mobile devices
5. **Performance**: Use the development script to optimize images

## 🔧 Troubleshooting

- **Site not building**: Check YAML syntax in `_config.yml`
- **Images not loading**: Verify image paths and file names
- **Contact form not working**: Check Formspree configuration
- **Styling issues**: Clear browser cache and rebuild

## 📞 Need Help?

- Check the full [README.md](README.md) for detailed documentation
- Open an issue on GitHub
- Review the [Jekyll documentation](https://jekyllrb.com/docs/)

---

**Ready to showcase your work? Let's build something amazing! 🚀**