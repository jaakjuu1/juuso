const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
  unhandled();

  welcome({
    title: `Juuso Jaakkola`,
    tagLine: `Get to know the Gnostic Developer`, 
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
  });
  
  checkNode('10');
  
}