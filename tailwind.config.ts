/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  theme: {
    screens: {
      "5xs": "320px",
      // => @media (min-width: 320px) { for iphone 5 }

      "4xs": "360px",
      // => @media (min-width: 320px) { for Samsung phone }

      "3xs": "380px",
      // => @media (min-width: 380px) { ... }

      "2xs": "420px",
      // => @media (min-width: 380px) { ... }

      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdx: "800px",
      // => @media (min-width: 800px) { ... }
      mdxx: "850px",
      // => @media (min-width: 850px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }

      "5xl": "2560px",
      // => @media (min-width: 1920px) { ... }
    },
    fontFamily: {
      body: ["Roboto"],
      diplay: ["Roboto"],
      sans: ["Roboto"],
      serif: ["Roboto"],
      poppin: ["Poppins"],
    },
    extend: {
      animation: {
        marquee: "marquee 3s linear infinite",
        marquee2: "marquee2 3s linear infinite",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.75rem" }],
           "md": "18px",   // Medium
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100px)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        opaq: "0 4px 16px 6px rgba(0,0,0,0.4)",
        full: "0 3px 1px -2px rgba(0,0,0, 0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) ",
      },
      colors: {
        primary: "#009688",

        primaryLite: "#e7f5f4",
        "primary-2": "#80CBC4",
        "primary-3": "#B3E0DB",
        primaryDark: "#00786c",
        secondary: "#444F60",
        "secondary-hover": "#596474",
        "secondary-dark": "#313131",
        "secondary-lite": "#f1f1f1",
        "secondary-1": "#4a4a4a",
        "secondary-2": "#556987",
        "secondary-3": "#C1C1C1",
        "secondary-4": "#C7CACF",
        "secondary-5": "#444444",
        "secondary-6": "#697280",
        "secondary-7": "#ECECEC",
        "secondary-8": "#ffffff",
        "hahu-red": "#991B1B",
        "hahu-red-2": "#DC2626",
        "hahu-red-3": "#FEE2E2",
        "hahu-gray": "#444F60",
        "hahu-dark": "#1B263B",
        'text-primary': 'rgb(0 0 0 / 0.7)',

        ////////////////////////////////
         "hahu-rate": "#F69321",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
