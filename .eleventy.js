const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const codeClipboard = require("eleventy-plugin-code-clipboard");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
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
