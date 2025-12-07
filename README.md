# Eleventy Midnight Theme with GitHub Pages

This is a static site built with [Eleventy](https://www.11ty.dev/) featuring the Midnight dark theme and automatically deployed to GitHub Pages.

## Features

- **Midnight Dark Theme** - Beautiful minimalist dark mode with gradient accents
- **Syntax Highlighting** - Powered by Prism.js with custom midnight color scheme
- **Code Clipboard** - One-click copy functionality for all code blocks
- **Automatic Deployment** - GitHub Actions workflow for seamless publishing

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version recommended)

### Local Development

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun start
   ```

   The site will be available at `http://localhost:8080`

3. Build for production:
   ```bash
   bun run build
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
│       └── deploy.yml           # GitHub Actions workflow
├── src/
│   ├── _layouts/
│   │   └── base.njk             # Base layout template
│   ├── assets/
│   │   └── css/
│   │       ├── style.css        # Midnight theme styles
│   │       └── prism-theme.css  # Syntax highlighting theme
│   └── index.md                 # Home page
├── .eleventy.js                 # Eleventy configuration with plugins
└── package.json                 # Dependencies and scripts
```

## Plugins

- [`@11ty/eleventy-plugin-syntaxhighlight`](https://www.11ty.dev/docs/plugins/syntaxhighlight/) - Syntax highlighting for code blocks
- [`eleventy-plugin-code-clipboard`](https://www.npmjs.com/package/eleventy-plugin-code-clipboard) - Copy-to-clipboard buttons for code blocks

## Adding Content

- Add new pages as `.md` or `.njk` files in the `src/` directory
- Edit the layout in `src/_layouts/base.njk`
- Customize theme colors in `src/assets/css/style.css` (CSS variables in `:root`)
- Add code blocks with syntax highlighting using triple backticks with language identifier
- Static assets go in `src/assets/`

## Theme Customization

The Midnight theme uses CSS variables for easy customization. Edit `src/assets/css/style.css`:

```css
:root {
  --bg-primary: #0d1117;      /* Main background */
  --bg-secondary: #161b22;    /* Card backgrounds */
  --accent-purple: #bc8cff;   /* Purple accent */
  --accent-blue: #58a6ff;     /* Blue accent */
  --accent-pink: #ff7b72;     /* Pink accent */
}
```

## Learn More

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [11ty-midnight Theme](https://github.com/sidswork/11ty-midnight) - Inspiration for this theme
