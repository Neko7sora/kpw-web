module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    fontFamily: {
      sans: [
        "LINESeedJPStd",
        "ui-sans-serif",
        "system-ui",
        "-apple-system,BlinkMacSystemFont",
        "segoe ui",
        "Roboto",
        "helvetica neue",
        "Arial",
        "noto sans",
        "sans-serif",
        "apple color emoji",
        "segoe ui emoji",
        "segoe ui symbol",
        "noto color emoji",
      ],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
