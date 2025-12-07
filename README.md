# Eleventy Static Site with GitHub Pages

This is a static site built with [Eleventy](https://www.11ty.dev/) and automatically deployed to GitHub Pages.

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

   The site will be available at `http://localhost:8080`

3. Build for production:
   ```bash
   npm run build
   ```

   The built site will be in the `_site` directory.

## Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setting up GitHub Pages

1. Push this repository to GitHub
2. Go to your repository Settings > Pages
3. Under "Build and deployment", set:
   - **Source**: GitHub Actions
4. Push to the `main` branch to trigger the deployment

The GitHub Actions workflow will automatically build and deploy your site.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── src/
│   ├── _layouts/
│   │   └── base.njk        # Base layout template
│   ├── assets/
│   │   └── css/
│   │       └── style.css   # Styles
│   └── index.md            # Home page
├── .eleventy.js            # Eleventy configuration
└── package.json            # Dependencies and scripts
```

## Adding Content

- Add new pages as `.md` or `.njk` files in the `src/` directory
- Edit the layout in `src/_layouts/base.njk`
- Add styles in `src/assets/css/style.css`
- Static assets go in `src/assets/`

## Learn More

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
