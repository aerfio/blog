module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // look at theme.css
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
        accent: "var(--accent)",
      },
    },
    boxShadow: {
      link: "0 1px 0 0 currentColor",
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
  future: {
    // remove build warnings https://tailwindcss.com/docs/upcoming-changes
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
