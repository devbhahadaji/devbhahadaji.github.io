# 🔐 GitHub Authentication Setup

You're getting a permission error because GitHub requires proper authentication. Here are the steps to fix this:

## Option 1: Using Personal Access Token (Recommended)

### Step 1: Create Personal Access Token
1. Go to GitHub.com and sign in as `devbhahadaji`
2. Go to **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. Click **"Generate new token (classic)"**
4. Give it a name like "Portfolio Deployment"
5. Select these scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)

### Step 2: Update Remote URL with Token
```bash
# Remove existing remote
git remote remove origin

# Add remote with your username and token
git remote add origin https://devbhahadaji:YOUR_TOKEN_HERE@github.com/devbhahadaji/portfolio.git

# Push to repository
git push -u origin main
```

## Option 2: Using SSH (Alternative)

### Step 1: Generate SSH Key (if you don't have one)
```bash
ssh-keygen -t ed25519 -C "shubhambhahada18062002@gmail.com"
```

### Step 2: Add SSH Key to GitHub
1. Copy your public key: `cat ~/.ssh/id_ed25519.pub`
2. Go to GitHub Settings → SSH and GPG keys
3. Click "New SSH key" and paste your public key

### Step 3: Update Remote to SSH
```bash
git remote set-url origin git@github.com:devbhahadaji/portfolio.git
git push -u origin main
```

## Current Issue
The error shows you're authenticated as `shubhambhahada` but trying to push to `devbhahadaji/portfolio`. This suggests:

1. Either you're using the wrong GitHub account
2. Or you need proper authentication set up

## Quick Fix Commands (After getting your token)
```bash
# Replace YOUR_TOKEN_HERE with your actual token
git remote set-url origin https://devbhahadaji:YOUR_TOKEN_HERE@github.com/devbhahadaji/portfolio.git
git push -u origin main
```

## Verify Authentication
After setting up authentication, you can verify with:
```bash
git remote -v
git push -u origin main
```

Your portfolio will then be available at:
**https://devbhahadaji.github.io/portfolio**