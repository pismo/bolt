const fs = require('fs')
const path = require('path')
const toKebabCase = (string = '') => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const COMPONENT_BASE_NAME_PACKAGE = 'cpackage'
const COMPONENT_BASE_NAME = 'Component'
const COMPONENT_BASE_PATH = './templates/component'
const COMPONENT_NAME = process.argv[2]
const COMPONENT_PATH = `./packages/${toKebabCase(COMPONENT_NAME)}`

console.log(COMPONENT_NAME)

if (!COMPONENT_NAME) return console.log('\x1b[31m', '[Bolt] ❌ Missing component name ❌')

const filesToCopy = fs.readdirSync(COMPONENT_BASE_PATH)

try {
  fs.mkdirSync(COMPONENT_PATH)
} catch (error) {
  return console.log('\x1b[31m', '[Bolt] ❌ A package with this name already exists ❌')
}

filesToCopy.forEach(fileName => {
  const newFileName = fileName.includes(COMPONENT_BASE_NAME) ? `${COMPONENT_NAME}${path.extname(fileName)}` : fileName
  const newPath = path.join(COMPONENT_PATH, newFileName)
  fs.copyFileSync(path.join(COMPONENT_BASE_PATH, fileName), newPath)

  const content = fs.readFileSync(newPath, 'utf8')
  fs.writeFileSync(newPath, content.replace(new RegExp(COMPONENT_BASE_NAME, 'g'), COMPONENT_NAME), 'utf8')
})

const packagePath = path.join(COMPONENT_PATH, 'package.json')
const packageContent = fs.readFileSync(packagePath, 'utf8')
fs.writeFileSync(
  packagePath,
  packageContent.replace(new RegExp(COMPONENT_BASE_NAME_PACKAGE, 'g'), toKebabCase(COMPONENT_NAME)),
  'utf8',
)

console.log('\x1b[32m', '[Bolt] Component created with success 🚀')
