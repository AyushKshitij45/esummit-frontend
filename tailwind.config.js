/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Plus-Jakarta-Sans": ['"PlusJakartaSans"', "sans-serif"],
        "Druk-Wide-Bold": ['"DrukWideBold"', "sans-serif"],
        "Gilroy-Medium": ["GilroyMedium", "sans-serif"],
        "Gilroy-ExtraBold": ["GilroyExtraBold", "sans-serif"],
      },
      backgroundImage: {
        "footer-bg": "url(/images/Footer_bg.png)",
        "hompage-bg": "url(/images/homePage_bg.png)",
        "hompage-bg-grid": "url(/images/homePage_bg_grid.png)",
      },
      screens: {
        mbMini: "290px",
        mbXSmall: "400px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        carousel: "932px",
        tbPortrait: "1200px",
        tbMedium: "1400px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
    },
  },
  plugins: [require("tailwindcss-border-gradients")],
};
