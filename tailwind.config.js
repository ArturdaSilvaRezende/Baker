/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tall: [{ raw: "(min-width: 600px) and (max-width: 767px)" }],
      sm: [{ max: "767px" }],
      md: [{ min: "768px", max: "1023px" }],
      lg: [{ min: "1024px", max: "1279px" }],
      xl: [{ min: "1280px", max: "1535px" }],
    },
  },
  plugins: [],
};
