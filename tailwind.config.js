import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        primary: {
          DEFAULT: "#97D28B",
          muted: "#DCEFD8",
        },
        secondary: {
          DEFAULT: "#35413A",
          muted: "#43554B",
        },
        accent: {
          DEFAULT: "#262D29",
        },
      },
      height: {
        seperator: "1px",
      },
      opacity: {
        1: "0.1",
        3: "0.3",
        4: "0.4",
        7: "0.7",
      },
      width: {
        invert: "1.5em",
      },
      padding: {
        themed: "1em",
      },
      spacing: {
        theme: "1em",
      },
      borderRadius: {
        themed: "24px",
      },
      fontSize: {
        large: [
          "3em",
          {
            lineHeight: "1em",
            fontWeight: "500",
          },
        ],
        small: [
          "1.1em",
          {
            lineHeight: "1.15em",
            fontWeight: "500",
          },
        ],
        leading: [
          "1.5em",
          {
            lineHeight: "1.15em",
            fontWeight: "500",
          },
        ],
        body: [
          "1.25em",
          {
            lineHeight: "1em",
            fontWeight: "500",
          },
        ],
        "body-small": [
          ".9em",
          {
            lineHeight: 1.2,
            fontWeight: 400,
          },
        ],
        smallest: [
          "24px",
          {
            lineHeight: 1.4,
            fontWeight: 500,
          },
        ],
      },
    },
  },
  plugins: [fluid, require("@shrutibalasa/tailwind-grid-auto-fit")],
};
require("tailwindcss/plugin")(function ({ addVariant }) {
  addVariant("em", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `.em\\:${rule.selector.slice(1)}`;
      rule.walkDecls((decl) => {
        decl.value = decl.value.replace("rem", "em");
      });
    });
  });
});
