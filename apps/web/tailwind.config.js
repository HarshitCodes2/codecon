/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        codecon: {
          primary: "#aa02c0",
          secondary: "#8a41e2",
          accent: "#1900ff",
          background: "#0c0c0c",
          bg_chat: "#a304f213",
          highlight: "#e604f2d2",
          heading: "#efefef",
          text: "#9f9f9f",
          primary_sdw: "",
          secondary_sdw: "",
          accent_sdw: "",
        },
        dropShadow: {
          glow: [
            "0 0px 20px rgba(255,255, 255, 0.35)",
            "0 0px 65px rgba(255, 255,255, 0.2)",
          ],
        },
      },
    },
  },
  plugins: [],
};
