module.exports = {
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './content/**/*.md',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   fmBlue: '#60A5FA',
      //   fmGreen: '#34D399',
      //   fmPink: '#F75C86',
      //   fmYellow: '#FAB908',
      //   fmPurple: '#A78BFA'
      // },
      fontFamily: {
        sans: [
          'Lato',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

    // "lint:js": "eslint --ext \".js,.vue\" --ignore-path .gitignore .",
    // "lint": "npm run lint:js"

    // "babel-eslint": "^10.1.0",
    // "eslint": "^7.22.0",
    // "eslint-plugin-nuxt": "^2.0.0",
    // "eslint-plugin-vue": "^7.7.0",