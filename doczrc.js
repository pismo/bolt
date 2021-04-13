const test = ['__test__/**/*.mdx'];
const docs = ['Readme.md', 'src/**/*.mdx'];

export default {
  typescript: true,
  files: process.env.TEST === 'true' ? test : docs,
  dest: '/bolt-docs',
  themeConfig: {
    showPlaygroundEditor: false,
  },
};
