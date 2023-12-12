import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
    extend: {
      colors: {
        'green-500': '#025B4B',
        'ivy-300': '#B3CEC9',
        'neutral-100': '#F5F7F7',
        'neutral-300': '#E7EAEB',
        'neutral-400': '#D4D8D9',
        'neutral-500': '#A7AAAB',
        'neutral-600': '#737680'
      },
      backgroundColor: {
        hover: 'rgba(245, 247, 247, 0.50)'
      },
      boxShadow: {
        standard: '0px 2px 0px 0px rgba(2, 91, 75, 0.10)',
        dropdown: '0px 4px 24px 0px rgba(0, 0, 0, 0.12)'
      },
      breakWord: {
        'word-break': 'break-word'
      }
    },
    fontFamily: {
      inter: ['Lora'],
      poppins: ['Poppins']
    }
  },
  plugins: []
} satisfies Config;
