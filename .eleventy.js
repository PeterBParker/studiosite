module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/main.js");
  eleventyConfig.addPassthroughCopy("src/functions.js");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
