module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({
      url: 'inline',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-apply-class')
  ]
}