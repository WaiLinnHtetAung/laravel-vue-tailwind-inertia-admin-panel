/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/ts/**/*.vue',
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.html",
    "./src/modules/*/*/*.vue",
    "./src/**/*.vue",
    "./src/**/*.js",
    "./node_modules/@fullcalendar/**/*",
    "./node_modules/simplebar-vue/**/*",
    "./node_modules/apexcharts/**/*",
    "./node_modules/swiper/**/*",
    "./node_modules/sweetalert2/**/*",
    "./node_modules/@simonwep/pickr/**/*",
    "./node_modules/scroll-hint/js/*",
    "./node_modules/tippy.js/**/*",
    "./node_modules/choices.js/**/*",
    "./node_modules/flatpickr/**/*",
    "./mode_modules/vue3-popper/**/*",
    "./node_modules/datatables.net/**/*",
    "./node_modules/datatables.net-dt/**/*",
    "./node_modules/datatables.net-responsive/**/*",
     "./node_modules/flowbite/**/*.js"
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      public: ['"Public Sans", sans-serif'],
      tourney: ['"Tourney", sans-serif'],
      remix: ["remixicon"]
    },
    container: {
      center: true
    },
    extend: {
      fontSize: {
        sm: "0.8125rem", //13px
        base: "0.875rem", //14px
        15: "0.9375rem", //15px
        16: "1rem", //16px
        "vertical-menu-item-font-size": "0.875rem"
      },
      colors: {
        body: colors.slate[800],
        "body-bg": colors.slate[100],
        "body-bordered": colors.white,
        "default": {
          100: '#f8dab8',
          200: '#f0b591',
          300: '#e88f6a',
          400: '#e06a43',
          500: '#ec6316', // Your main color
          600: '#cf5a12',
          700: '#b2510f',
          800: '#94480b',
          900: '#773f08',
          tr: '#ec6618cc'
        },

        //sidebar light
        "vertical-menu": colors.white,
        "vertical-menu-border": colors.slate[200],
        "vertical-menu-item": colors.slate[400],
        "vertical-menu-item-hover": colors.blue[500],
        "vertical-menu-item-bg-hover": colors.blue[50],
        "vertical-menu-item-active": colors.blue[500],
        "vertical-menu-item-bg-active": colors.blue[50],
        "vertical-menu-sub-item": colors.slate[400],
        "vertical-menu-sub-item-hover": colors.blue[500],
        "vertical-menu-sub-item-active": colors.blue[500],

        //sidebar dark
        "vertical-menu-dark": colors.slate[900],
        "vertical-menu-border-dark": colors.slate[900],
        "vertical-menu-item-dark": colors.slate[500],
        "vertical-menu-item-hover-dark": colors.blue[500],
        "vertical-menu-item-bg-hover-dark": colors.slate[800],
        "vertical-menu-item-active-dark": colors.blue[500],
        "vertical-menu-item-bg-active-dark": colors.slate[800],
        "vertical-menu-sub-item-dark": colors.slate[500],
        "vertical-menu-sub-item-hover-dark": colors.blue[500],
        "vertical-menu-sub-item-active-dark": colors.blue[500],

        //sidebar brand
        "vertical-menu-brand": colors.blue[900],
        "vertical-menu-border-brand": colors.blue[900],
        "vertical-menu-item-brand": colors.blue[300],
        "vertical-menu-item-hover-brand": colors.blue[50],
        "vertical-menu-item-bg-hover-brand": "#224097",
        "vertical-menu-item-active-brand": colors.blue[50],
        "vertical-menu-item-bg-active-brand": "#224097",
        "vertical-menu-sub-item-brand": "#a4bbfd",
        "vertical-menu-sub-item-hover-brand": colors.blue[50],
        "vertical-menu-sub-item-active-brand": colors.blue[50],

        //sidebar modern
        "vertical-menu-to-modern": colors.blue[900],
        "vertical-menu-form-modern": colors.green[900],
        "vertical-menu-border-modern": colors.blue[900],
        "vertical-menu-item-modern": "rgba(255, 255, 255, 0.60)",
        "vertical-menu-item-hover-modern": "rgba(255, 255, 255)",
        "vertical-menu-item-bg-hover-modern": "rgba(255, 255, 255, 0.06)",
        "vertical-menu-item-active-modern": colors.blue[50],
        "vertical-menu-item-bg-active-modern": "rgba(255, 255, 255, 0.06)",
        "vertical-menu-sub-item-modern": "rgba(255, 255, 255, 0.50)",
        "vertical-menu-sub-item-hover-modern": colors.white,
        "vertical-menu-sub-item-active-modern": colors.white,

        //TOPBAR
        topbar: colors.white,
        "topbar-border": colors.slate[200],
        "topbar-item": colors.slate[700],
        "topbar-item-hover": colors.slate[800],
        "topbar-item-bg-hover": colors.slate[100],

        "topbar-dark": colors.slate[900],
        "topbar-border-dark": colors.slate[700],
        "topbar-item-dark": colors.slate[400],
        "topbar-item-hover-dark": colors.slate[100],
        "topbar-item-bg-hover-dark": colors.slate[800],

        "topbar-brand": colors.blue[900],
        "topbar-border-brand": colors.blue[800],
        "topbar-item-brand": "#a4bbfd",
        "topbar-item-hover-brand": colors.white,
        "topbar-item-bg-hover-brand": "#224097",

        "topbar-modern": colors.white,

        custom: {
          50: '#f8dab8',
          100: '#f8dab8',
          200: '#f0b591',
          300: '#e88f6a',
          400: '#e06a43',
          500: '#ec6316', // Your main color
          600: '#cf5a12',
          700: '#b2510f',
          800: '#94480b',
          900: '#773f08',
        },
        red: {
          50: colors.red[50],
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: colors.red[500], // Using Tailwind's color palette
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
          900: colors.red[900],
          950: colors.red[950]
        },
        green: {
          50: "#EAFAF7",
          100: "#D2F4EE",
          200: "#A0E8DB",
          300: "#56D7BF",
          400: "#2DBDA3",
          500: "#249782", // Using Tailwind's color palette
          600: "#208875",
          700: "#1C7767",
          800: "#186355",
          900: "#11463C",
          950: "#0B2D27"
        },

        yellow: {
          50: colors.yellow[50],
          100: colors.yellow[100],
          200: colors.yellow[200],
          300: colors.yellow[300],
          400: colors.yellow[400],
          500: colors.yellow[500], // Using Tailwind's color palette
          600: colors.yellow[600],
          700: colors.yellow[700],
          800: colors.yellow[800],
          900: colors.yellow[900],
          950: colors.yellow[950]
        },

        orange: {
          50: colors.orange[50],
          100: colors.orange[100],
          200: colors.orange[200],
          300: colors.orange[300],
          400: colors.orange[400],
          500: colors.orange[500], // Using Tailwind's color palette
          600: colors.orange[600],
          700: colors.orange[700],
          800: colors.orange[800],
          900: colors.orange[900],
          950: colors.orange[950]
        },

        sky: {
          50: colors.sky[50],
          100: colors.sky[100],
          200: colors.sky[200],
          300: colors.sky[300],
          400: colors.sky[400],
          500: colors.sky[500], // Using Tailwind's color palette
          600: colors.sky[600],
          700: colors.sky[700],
          800: colors.sky[800],
          900: colors.sky[900],
          950: colors.sky[950]
        },

        purple: {
          50: colors.purple[50],
          100: colors.purple[100],
          200: colors.purple[200],
          300: colors.purple[300],
          400: colors.purple[400],
          500: colors.purple[500], // Using Tailwind's color palette
          600: colors.purple[600],
          700: colors.purple[700],
          800: colors.purple[800],
          900: colors.purple[900],
          950: colors.purple[950]
        },

        zink: {
          50: "#E2EAF3",
          100: "#C8D7E9",
          200: "#92AFD3",
          300: "#5885BC",
          400: "#395F8E",
          500: "#233A57",
          600: "#1C2E45",
          700: "#132337",
          800: "#0F1824",
          900: "#070C12",
          950: "#030507"
        }
      },
      spacing: {
        header: "4.375rem", // 70px
        "vertical-menu": "16.25rem", // 260px
        "vertical-menu-md": "10.3125rem", // 165px
        "vertical-menu-sm": "4.375rem" // 70px
      },
      maxWidth: {
        boxed: "87.5rem" // 1400px
      },
      minHeight: {
        sm: "1650px" // 1650px
      },
      height: {
        heademainChatListr: "2px"
      },
      zIndex: {
        drawer: "1050"
      },
      backgroundImage: {
        "auth-pattern": "url('../images/auth-bg.jpg')",
        "auth-pattern-dark": "url('../images/auth-bg-dark.jpg')"
      },
      animation: {
        icons: "iconsAnimation 50s",
        progress: "progressAnimation 2s"
      },
      keyframes: {
        iconsAnimation: {
          to: { strokeDashoffset: "500" }
        },
        progressAnimation: {
          "0%": {
            width: "0"
          }
        }
      },
      aspectRatio: {
        "1/1": "1 / 1",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "21/9": "21 / 9"
      },
      clipPath: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)"
      }
    }
  },
  plugins: [
    require("./resources/ts/plugins/headings.ts"),
    require("./resources/ts/plugins/buttons.ts"),
    require("./resources/ts/plugins/forms.ts"),
    require("./resources/ts/plugins/card.ts"),
    require("./resources/ts/plugins/drawer.ts"),
    //third party libraries
    require("./resources/ts/plugins/flatpicker.ts"),
    require("./resources/ts/plugins/simplebar.ts"),
    require("./resources/ts/plugins/sweetalert2.ts"),
    require("./resources/ts/plugins/swiper.ts"),
    require("./resources/ts/plugins/tippy.ts"),
    require("./resources/ts/plugins/toastify.ts"),
    require("./resources/ts/plugins/choices.ts"),
    require("./resources/ts/plugins/dropzone.ts"),
    require("./resources/ts/plugins/colorpicker.ts"),
    require("./resources/ts/plugins/ckeditor.ts"),
    require("./resources/ts/plugins/datatable.ts"),
    require("./resources/ts/plugins/apexcharts.ts"),
    require("./resources/ts/plugins/maps.ts"),
    require("./resources/ts/plugins/listjs.ts"),
    require("./resources/ts/plugins/scroll-hint.ts"),
    require("./resources/ts/plugins/multijs.ts"),
    require("./resources/ts/plugins/fullcalendar.ts"),
    require("./resources/ts/plugins/lightbox.ts"),
    require("./resources/ts/plugins/prismjs.ts"),
    require("./resources/ts/plugins/vanilla-calendar.ts"),
    // //apps pages
    require("./resources/ts/plugins/apps.ts"),
    require("./resources/ts/plugins/custom.ts"),
    require('flowbite/plugin')
  ]
};

