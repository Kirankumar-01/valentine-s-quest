# GitHub Pages Deployment Guide

This guide will help you deploy your Valentine's Quest app to GitHub Pages.

## What Was Fixed

1. **React Router Base Path**: Added `basename="/valentine-s-quest"` to `BrowserRouter` in `App.tsx` to match the GitHub Pages base path
2. **GitHub Actions Workflow**: Created `.github/workflows/deploy.yml` for automatic deployment
3. **SPA Routing Support**: Added `404.html` in the `public` folder to handle client-side routing on GitHub Pages
4. **Index.html Updates**: Updated `index.html` to include SPA routing script and removed hardcoded build assets

## Step-by-Step Deployment Instructions

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/Kirankumar-01/valentine-s-quest
   - Click on **Settings** (top menu)
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push Your Code:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - You should see a workflow run called "Deploy to GitHub Pages"
   - Wait for it to complete (usually 2-3 minutes)
   - Once it shows a green checkmark, your site is live!

4. **Access Your Site:**
   - Your site will be available at: https://kirankumar-01.github.io/valentine-s-quest/
   - It may take a few minutes for the changes to propagate

### Option 2: Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy using gh-pages:**
   ```bash
   npm run deploy
   ```

   Note: This requires the `gh-pages` package (already in your dependencies) and GitHub CLI authentication.

## Troubleshooting

### Issue: "404 - Page not found" after deployment

**Solution:** Make sure:
- GitHub Pages source is set to **GitHub Actions** (not a branch)
- The workflow completed successfully in the Actions tab
- You're accessing the correct URL: `https://kirankumar-01.github.io/valentine-s-quest/`

### Issue: Assets not loading (CSS/JS files show 404)

**Solution:** 
- The `base: "/valentine-s-quest/"` in `vite.config.ts` should handle this
- Make sure you've pushed all changes and the build completed successfully
- Clear your browser cache and try again

### Issue: Routes not working (direct URL access shows 404)

**Solution:**
- The `404.html` file in the `public` folder should handle this
- Make sure it was copied to the `dist` folder during build
- Verify the SPA routing script is in your `index.html`

### Issue: GitHub Actions workflow fails

**Common causes:**
- Missing dependencies in `package.json` - run `npm install` locally first
- Node version mismatch - the workflow uses Node 20
- Build errors - check the Actions logs for specific error messages

## Verification Checklist

After deployment, verify:

- [ ] Site loads at https://kirankumar-01.github.io/valentine-s-quest/
- [ ] All CSS styles are applied correctly
- [ ] All images/assets load properly
- [ ] Navigation/routing works (if you have multiple pages)
- [ ] The site works on mobile devices
- [ ] No console errors in browser DevTools

## Making Updates

After making changes to your code:

1. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically rebuild and redeploy your site

3. Wait 2-3 minutes for the deployment to complete

4. Refresh your site to see the changes

## Need Help?

If you encounter issues:
1. Check the **Actions** tab for error messages
2. Verify all files were committed and pushed
3. Ensure GitHub Pages is enabled and set to use GitHub Actions
4. Check that your repository is public (required for free GitHub Pages)
