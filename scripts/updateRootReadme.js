const fs = require('fs')

const PATH_README_ROOT = './README.md'
const readmetext = fs.readFileSync(PATH_README_ROOT, 'utf8')

const packagesNames = fs.readdirSync('./packages')
const listLines = readmetext.split('\n')

const findComponentsBlock = (str = []) => str.findIndex(el => /## Components/.test(el))
const findNextTopic = (base, str = []) => base + str.slice(base + 1).findIndex(el => /^#/.test(el))

const startComponentsBlock = findComponentsBlock(listLines)
const endComponentsBlock = findNextTopic(startComponentsBlock, listLines)

const toCamelCase = (string = '') =>
  string
    .split('-')
    .map(c => c.charAt(0).toUpperCase() + c.substr(1))
    .join('')

const lineTemplate = packageName =>
  `| [\`bolt-${packageName}\`](/packages/${packageName})` +
  `| [![npm version](https://badge.fury.io/js/%40pismo%2Fbolt-${packageName}.svg)](https://badge.fury.io/js/%40pismo%2Fbolt-${packageName})` +
  `| [${toCamelCase(packageName)} Documentation](https://bolt.pismolabs.io/packages-core-components-${packageName}) |`

const table = ['| Package | Version | Documentation |', '| - | - | - |', ...packagesNames.map(pkg => lineTemplate(pkg))]

const newListComponentsBlock = [`## Components`, '', ...table, '']

const newReadme = [
  ...listLines.slice(0, startComponentsBlock),
  ...newListComponentsBlock,
  ...listLines.slice(endComponentsBlock),
].join('\n')

try {
  fs.writeFileSync(PATH_README_ROOT, newReadme, 'utf8')
  console.log('\x1b[32m', '[Bolt] Root readme updated ')
} catch (err) {
  console.log(err)
}
