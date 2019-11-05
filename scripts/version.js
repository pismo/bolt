const fs = require('fs-extra')
const path = require('path')
const exec = require('child_process').exec

const pkgpath = path.join(__dirname, '../package.json')

const lerna = fs.readJSONSync(path.join(__dirname, '../lerna.json'))
const package = fs.readJSONSync(pkgpath)

package.version = lerna.version

fs.writeJSONSync(pkgpath, package)

exec("prettier-standard 'package.json'", function (error, stdout) {
  if (!error) console.log(stdout)
})
