/* eslint-disable global-require, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-color-function'),
    require('postcss-url')({
      url: 'inline',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
