/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#edff96",

          secondary: "#24f25b",

          accent: "#a483d3",

          neutral: "#1A1E2D",

          "base-100": "#31264B",

          info: "#6EA5F7",

          success: "#22BF90",

          warning: "#E48C11",

          error: "#F22C50",
        },
        mytheme2: {
          primary: "#fda4af",

          secondary: "#917af9",

          accent: "#3bdbab",

          neutral: "#2B2537",

          "base-100": "#EFF2F5",

          info: "#94C6DB",

          success: "#1A7459",

          warning: "#B1800B",

          error: "#E62868",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
