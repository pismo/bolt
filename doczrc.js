export default {
  typescript: true,
  title: 'Pismo Bolt',
  description: 'Pismo UI documentation',
  themeConfig: {
    colors: {
      primary: '#F37A21',
    },
    styles: {
      h1: {
        fontSize: [60, 40, 32],
        fontWeight: 300,
        letterSpacing: '-0.02em',
        fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
      },
    },
  },
  menu: ['Home', 'Basics', 'Components', 'Utilities'],
  files: '**/packages/**/*.mdx',
  dest: '/docs',
}
