const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const codeClipboard = require("eleventy-plugin-code-clipboard");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Add custom filter for relative paths
  eleventyConfig.addFilter("relativePath", function(path) {
    // Get the current page's URL
    const pageUrl = this.page?.url || "/";
    // Count the depth (number of slashes minus 1 for root)
    const depth = (pageUrl.match(/\//g) || []).length - 1;
    // Create relative prefix (../ for each level)
    const prefix = depth > 0 ? "../".repeat(depth) : "./";
    // Combine with path, removing leading slash if present
    return prefix + path.replace(/^\//, "");
  });

  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: { tabindex: 0 }
  });

  // Add code clipboard plugin
  eleventyConfig.addPlugin(codeClipboard);

  // Configure markdown-it with code clipboard support
  const markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(codeClipboard.markdownItCopyButton);

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
