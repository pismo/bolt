const fs = require('fs')
const glob = require('glob')
const stripComments = require('strip-json-comments')
const camelCase = require('camelcase')

const SASS_VARIABLE_REGEX = /\$(.+):\s+(.+);?/

const toObject = arr => {
  const result = {}

  arr.forEach(({ key, value }) => {
    result[key] = value
  })

  return result
}

const readSASS = filename =>
  stripComments(fs.readFileSync(filename).toString())

const writeJS = (filename, contents) =>
  fs.writeFileSync(
    `${filename}.js`,
    'module.exports = {'
      .concat(JSON.stringify(contents, null, 2)
        .replace(/[\{\}]/g, '')
      )
      .concat('}\n')
  )

const writeModuleJS = sassModule => writeJS(`_${sassModule.name}`, toObject(sassModule.variables))

const writeIndexJS = sassModules => {
  const filename = 'index'
  const allVariables = sassModules.map(sassModule => sassModule.variables).reduce((a, b) => a.concat(b))

  return writeJS(filename, toObject(allVariables))
}

const main = () => {
  glob('*.scss', (error, files) => {
    const sassModules = []
    const variableFiles = files.filter(filename => filename.charAt(0) === '_')

    variableFiles.forEach(filename => {
      const moduleName = filename.split('.')[0].replace(/[_\.]/, '')
      const sassModule = { name: moduleName, variables: [] }

      const contents = readSASS(filename).split('\n')
        .map(line => {
          const variablesFromLine = SASS_VARIABLE_REGEX.exec(line)

          if (!variablesFromLine) {
            return false
          }

          const key = variablesFromLine[1]
          const value = variablesFromLine[2]

          sassModule.variables.push({
            key: key.trim(),
            value: value.trim(),
          })
        })

      const computedSassModule = {
        ...sassModule,
        variables: sassModule.variables.map(variable => {
          const needsToBeComputed = /\$/.test(variable.value)
          const sanitizedValue = variable.value.replace(/\;/, '')

          if (!needsToBeComputed) {
            return {
              ...variable,
              value: sanitizedValue,
            }
          }

          const noSignValue = sanitizedValue.replace(/\$/, '')
          const referenceVariable = sassModule.variables.find(someVariable =>
            someVariable.key === noSignValue
          )

          return {
            key: variable.key,
            value: referenceVariable.value.replace(/\;/, ''),
          }
        }),
      }

      const camelCaseSassModule = {
        ...computedSassModule,
        variables: computedSassModule.variables.map(variable => ({
          ...variable,
          key: camelCase(variable.key),
        })),
      }

      sassModules.push(camelCaseSassModule)
    })

    sassModules.forEach(writeModuleJS)
    writeIndexJS(sassModules)
  })
}

return main()
