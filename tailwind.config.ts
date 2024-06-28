import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        xs: "475px",
        // => @media (min-width: 475px) { ... }
        
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    extend: {
      spacing: {
        "screenheader": 'calc(100vh - 4rem)'
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Poppins",
        body: "Poppins",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#E21D48",
          "primary-focus": "#be123c",
          "primary-content": "#020617",

          secondary: "#7e22ce",
          "secondary-focus": "#581c87",
          "secondary-content": "#020617",

          accent: "#FDB423",
          "accent-focus": "#ca8a04",
          "accent-content": "#020617",

          neutral: "#c8ccd5",
          "neutral-focus": "#e2e4e9",
          "neutral-content": "#020617",

          "base-100": "#74849a",
          "base-200": "#95a3b7",
          "base-300": "#e8ebfd",
          "base-content": "#020617",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      {
        dark: {
          primary: "#E21D48",
          "primary-focus": "#be123c",
          "primary-content": "#f1f5f9",

          secondary: "#7e22ce",
          "secondary-focus": "#581c87",
          "secondary-content": "#f1f5f9",

          accent: "#FDB423",
          "accent-focus": "#ca8a04",
          "accent-content": "#f1f5f9",

          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#f1f5f9",

          "base-100": "#64748b",
          "base-200": "#475569",
          "base-300": "#020617",
          "base-content": "#f1f5f9",

          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
        },
      },
    ],
  },
};
export default config;
