const fs = require('fs')
const { exec } = require('child_process')

const allPackages = fs.readdirSync('./packages')

allPackages.forEach(package =>
  exec(`cd packages/${package} && yarn link`, (error, result) => {
    if (error) console.error(error)
    console.log(result)
  }),
)
