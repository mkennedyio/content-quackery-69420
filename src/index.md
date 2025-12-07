---
layout: base.njk
title: Welcome to Midnight
---

## Hello World!

This is a static site built with [Eleventy](https://www.11ty.dev/) featuring the Midnight dark theme and deployed automatically to GitHub Pages.

### Features

- **Midnight Dark Theme** - Beautiful dark mode with gradient accents
- **Syntax Highlighting** - Powered by Prism.js with custom midnight theme
- **Code Clipboard** - Click the copy button on any code block
- **Static Site Generation** - Fast and efficient with Eleventy
- **Automatic Deployment** - Push to main and GitHub Actions handles the rest

### Code Examples

Try hovering over these code blocks and clicking the copy button in the top-right corner!

#### JavaScript

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to the midnight theme`;
}

// Call the function
const message = greet('Developer');
console.log(message);
```

#### Python

```python
def calculate_fibonacci(n):
    """Calculate the nth Fibonacci number"""
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Generate first 10 Fibonacci numbers
fibonacci_sequence = [calculate_fibonacci(i) for i in range(10)]
print(fibonacci_sequence)
```

#### CSS

```css
:root {
  --bg-primary: #0d1117;
  --accent-purple: #bc8cff;
  --accent-blue: #58a6ff;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### Bash

```bash
#!/bin/bash

# Build and deploy script
echo "Building Eleventy site..."
npm run build

echo "Deploying to GitHub Pages..."
git add _site
git commit -m "Deploy updated site"
git push origin main
```

### Getting Started

Edit the content in `src/index.md` and push to GitHub. The site will automatically rebuild and deploy!

Inline code also looks great: `const theme = 'midnight'`
