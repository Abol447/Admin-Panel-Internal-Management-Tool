/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gap: {
        "y-pagination": "36px",
      },
      width: {
        paginationDots: "8px",
      },
      colors: {
        dotBg: "#2F80ED",
        dotBgunactive: "#D1D1D6",
      },
    },
  },
  plugins: [],
};
