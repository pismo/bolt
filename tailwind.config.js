/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false,
  prefix: 'tw-',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato'],
      },
      colors: {
        gray: {
          10: '#EBEAF0',
          25: '#DBDAE2',
          50: '#BCBAC8',
          75: '#838192',
          90: '#525061',
          95: '#3F3D4B',
          DEFAULT: '#16161E',
        },
        orange: {
          light: '#FFE37A',
          dark: '#FE8D53',
          DEFAULT: '#FFA945',
        },
        green: {
          light: '#BAEDD9',
          dark: '#6ACBB1',
          darker: '#31AA7E',
          DEFAULT: '#99DEC3',
        },
        accent: {
          lighter: '#8AE1FD',
          light: '#4FB1F9',
          dark: '#1672C7',
          DEFAULT: '#1897F3',
        },
        alert: {
          light: '#F37C91',
          dark: '#BB2B45',
          DEFAULT: '#DF4561',
        },
        cream: {
          DEFAULT: '#FAFAFA',
        },
        black: {
          25: '#BCBAC8',
          50: '#838192',
          75: '#616161',
        },
      },
      backgroundColor: {
        black: colors.black,
      },
      textColor: {
        black: {
          DEFAULT: colors.black,
          75: '#616161',
          50: '#838192',
          25: '#bcbacb',
        },
      },
      ringColor: {
        gray: colors.gray,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      cursor: ['disabled'],
      ringColor: ['hover'],
      ringWidth: ['hover'],
      transitionProperty: ['hover'],
      transitionDuration: ['hover'],
      borderStyle: ['focus'],
      borderWidth: ['focus'],
      borderColor: ['focus'],
      fontWeight: ['hover'],
    },
  },
  plugins: [],
};
