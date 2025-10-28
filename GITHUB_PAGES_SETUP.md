# GitHub Pages Deployment Guide

This guide will help you deploy your Isaiah's Portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio project files

## Step-by-Step Setup

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. **Important:** Name your repository exactly as: `USERNAME.github.io`
   - Replace `USERNAME` with your actual GitHub username
   - For example: `isaiah-omulo.github.io`
5. Make sure it's set to **Public**
6. Click **Create repository**

### 2. Initialize Git and Push Your Code

Open your terminal/command prompt and run these commands:

```bash
# Navigate to your project directory
cd /path/to/isaiah-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push to GitHub
git push -u origin main
```

### 3. Automatic Deployment with GitHub Actions

The workflow file (`.github/workflows/deploy.yml`) is already configured. When you push to the `main` branch:

1. GitHub Actions will automatically build your project
2. The built files will be deployed to GitHub Pages
3. Your site will be live at: `https://USERNAME.github.io`

### 4. Verify GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Verify that:
   - **Source** is set to **Deploy from a branch**
   - **Branch** is set to **gh-pages**
   - **Folder** is set to **/ (root)**

The `gh-pages` branch is automatically created by the GitHub Actions workflow.

### 5. Access Your Website

After the workflow completes (usually within 1-2 minutes):
- Visit: `https://USERNAME.github.io`
- Your portfolio will be live!

## Updating Your Portfolio

To make changes and deploy them:

```bash
# Make your changes to the code

# Commit and push
git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

## Troubleshooting

### Site not showing up?
- Wait 2-3 minutes for the first deployment
- Check the **Actions** tab in your GitHub repository to see if the build succeeded
- Verify your repository name is exactly `USERNAME.github.io`

### Build failed?
- Check the workflow logs in the **Actions** tab
- Ensure all dependencies are correctly listed in `package.json`

### Custom domain?
If you want to use a custom domain (e.g., `isaiah-portfolio.com`):
1. Update your domain's DNS settings to point to GitHub Pages
2. In repository Settings > Pages, add your custom domain
3. GitHub will create a `CNAME` file automatically

## File Structure

```
isaiah-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          (GitHub Actions workflow)
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── ...
│   └── public/
├── dist/                        (Generated after build)
├── vite.config.ts              (Vite configuration)
├── package.json
└── GITHUB_PAGES_SETUP.md        (This file)
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
