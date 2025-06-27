/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // الألوان الرئيسية (بدون بادئة)
        juGold: "#FACC15",
        juGoldLight: "#FEF9C3",

        juGreen: "#10B981",
        juGreenLight: "#D1FAE5",

        juSky: "#C3EBFA",
        juSkyLight: "#EDF9FD",

        // ألوان الوضع الداكن
        juGoldDark: "#b58104",
        juGoldLightDark: "#fde68a",

        juGreenDark: "#047857",
        juGreenLightDark: "#34d399",

        juSkyDark: "#1E3A8A",
        juSkyLightDark: "#60A5FA",
      },
      // إضافة دعم للاتجاهات
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      }
    },
  },
  plugins: [
    // إضافة plugin للاتجاهات
    function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
        '.flip-horizontal': {
          transform: 'scaleX(-1)',
        },
        '.transition-direction': {
          transition: 'all 0.3s ease',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}