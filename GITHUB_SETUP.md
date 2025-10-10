# 🚀 GitHub Repository Setup Instructions

## Step 1: Create Repository on GitHub

1. **Go to GitHub**: Open [https://github.com](https://github.com) in your browser
2. **Sign in** to your GitHub account
3. **Click the "+" icon** in the top right corner
4. **Select "New repository"**

## Step 2: Repository Configuration

### Repository Name Options:

**Option A: Personal Portfolio Site (Recommended)**
- Repository name: `yourusername.github.io` (replace with your actual GitHub username)
- This will make your site available at `https://yourusername.github.io`

**Option B: Project Portfolio**
- Repository name: `portfolio`
- This will make your site available at `https://yourusername.github.io/portfolio`

### Repository Settings:
- ✅ **Public** (required for free GitHub Pages)
- ❌ **Do NOT initialize with README** (we already have one)
- ❌ **Do NOT add .gitignore** (we already have one)
- ❌ **Do NOT choose a license** (we already have one)

## Step 3: Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands:

```bash
# Add GitHub repository as origin (replace with your actual repository URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **"GitHub Actions"**
5. The workflow will automatically deploy your site

## Step 5: Your Site Will Be Live!

- **If repository name is `yourusername.github.io`**: 
  - Site URL: `https://yourusername.github.io`
  
- **If repository name is `portfolio`**:
  - Site URL: `https://yourusername.github.io/portfolio`

## 🎯 Quick Commands for You

Replace `yourusername` with your actual GitHub username:

```bash
# For personal site (yourusername.github.io)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# OR for project site (portfolio)
git remote add origin https://github.com/yourusername/portfolio.git

# Then push to GitHub
git branch -M main
git push -u origin main
```

## 🔄 Future Updates

After your initial setup, updating your portfolio is easy:

```bash
# Make changes to _config.yml or other files
git add .
git commit -m "Update portfolio content"
git push
```

Your site will automatically rebuild and deploy within a few minutes!

## 🌟 What Happens Next

1. **GitHub Actions** will automatically build and deploy your site
2. **Your portfolio will be live** in 2-5 minutes
3. **Every push to main branch** will trigger a new deployment
4. **You can check deployment status** in the Actions tab of your repository

---

**Ready to go live? Create your repository and run the commands above! 🚀**