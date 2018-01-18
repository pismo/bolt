const fs = require('fs')

const META_FILENAME = '.meta.json'
const README_FILENAME = 'README.md'
const COMPLEMENTARY_README_FILENAME = 'complementary.md'

const readJSON = file =>
  JSON.parse(fs.readFileSync(file))

const readMD = file => {
  let result = ''

  try {
    result = fs.readFileSync(file)
  } catch (e) {
    //
  }

  return result
}

const capitalized = str =>
  str.charAt(0).toUpperCase()
    .concat(str.slice(1, str.length))

const convertDocgenJSONToMarkdown = data => {
  const {
    displayName: title,
    description: description,
    props,
  } = data

  const cwdParts = process.cwd().split('/')
  const packageName = cwdParts[cwdParts.length - 1]
  const fullPackageName = `@pismo/bolt-${packageName}`
  const capitalizedPackageName = capitalized(packageName)
  const propsEntries = Object.entries(props)

  const propsTableHeader = `
    Prop | Type | Description | Required | Default
    --- | :---: | --- | :---: | :---:
  `.trim()

  const propsTableRows = []

  for (const [propName, propData] of propsEntries) {
    const {
      type = {},
      description: propDescription,
      required,
      defaultValue = {},
    } = propData

    propsTableRows.push(`**${propName}** | ${type.name || '–'} | ${propDescription || '–'} | ${required} | ${defaultValue.value || '–'}`)
  }

  return `
    # Bolt ${title}
    ${description ? description.concat('\n\n---\n') : ''}
    ## Installation
    \`\`\`sh
      > yarn add ${fullPackageName}
    \`\`\`

    ## Usage
    \`\`\`js
      import ${capitalizedPackageName} from '${fullPackageName}'
    \`\`\`

    ### Props
    ${propsTableHeader
    .concat('\n')
    .concat(propsTableRows.join('\n')
    )}
  `.replace(/   +/g, '').trim()
    .concat('\n')
}

const writeFile = (file, contents) =>
  fs.writeFile(file, contents)

const main = () => {
  const componentDir = process.cwd()
  const metaContents = readJSON(`${componentDir}/${META_FILENAME}`)
  const readmeOut = `${componentDir}/${README_FILENAME}`
  const readmeAutoContents = convertDocgenJSONToMarkdown(metaContents)
  const readmeComplementaryContents = readMD(`${componentDir}/${COMPLEMENTARY_README_FILENAME}`)
  const readmeContents = readmeAutoContents.concat('\n\n').concat(readmeComplementaryContents)

  return writeFile(readmeOut, readmeContents)
}

return main()
