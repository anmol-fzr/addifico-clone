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
        },
        accent: "#262D29",
      },
      width: {
        invert: "1.5em",
      },
      padding: {
        theme: "1em",
      },
      spacing: {
        theme: "1em",
      },
      borderRadius: {
        theme: "24px",
      },
      fontSize: {
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
      },
    },
  },
  plugins: [fluid],
};
