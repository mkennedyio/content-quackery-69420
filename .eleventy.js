const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const codeClipboard = require("eleventy-plugin-code-clipboard");

module.exports = function(eleventyConfig) {
  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: { tabindex: 0 }
  });

  // Add code clipboard plugin
  eleventyConfig.addPlugin(codeClipboard);

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
