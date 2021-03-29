/* eslint-disable global-require, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call,
@typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access,
@typescript-eslint/restrict-template-expressions, @typescript-eslint/no-floating-promises, no-console
*/
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const pkg = fs.readJSONSync(path.join(__dirname, '../package.json'));
const currentVersion = pkg.version;

const splitSemVer = currentVersion.split(/\.|-/);

const major = `${Number(splitSemVer[0]) + 1}.0.0`;
const minor = `${splitSemVer[0]}.${Number(splitSemVer[1]) + 1}.0`;
const patch = `${splitSemVer[0]}.${splitSemVer[1]}.${Number(splitSemVer[2]) + 1}`;

let alpha = `${splitSemVer[0]}.${splitSemVer[1]}.${splitSemVer[2]}-alpha`;
let beta = `${splitSemVer[0]}.${splitSemVer[1]}.${splitSemVer[2]}-beta`;

if (splitSemVer.length >= 4) {
  if (splitSemVer[3] === 'alpha') {
    alpha = `${splitSemVer[0]}.${splitSemVer[1]}.${splitSemVer[2]}-alpha.${
      splitSemVer.length === 5 ? Number(splitSemVer[4]) + 1 : '1'
    }`;
    beta = `${splitSemVer[0]}.${splitSemVer[1]}.${splitSemVer[2]}-beta`;
  }

  if (splitSemVer[3] === 'beta') {
    alpha = `${Number(splitSemVer[0]) + 1}.0.0-alpha`;
    beta = `${splitSemVer[0]}.${splitSemVer[1]}.${splitSemVer[2]}-beta.${
      splitSemVer.length === 5 ? Number(splitSemVer[4]) + 1 : '1'
    }`;
  }
}

const list = {
  [`Major => ${currentVersion} -> ${major}`]: major,
  [`Minor => ${currentVersion} -> ${minor}`]: minor,
  [`Patch => ${currentVersion} -> ${patch}`]: patch,
  [`alpha => ${currentVersion} -> ${alpha}`]: alpha,
  [`beta => ${currentVersion} -> ${beta}`]: beta,
};

(async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'version',
        message: 'choice the next version',
        choices: Object.keys(list),
      },
    ]);

    exec(`yarn standard-version --release-as ${list[answers.version]}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
