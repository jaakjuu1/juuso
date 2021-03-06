#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const alert = require('juuso-cli-alerts');
const log = console.log;
const twitterClr = chalk.bold.hex('#1da1f2').inverse;
const githubClr = chalk.bold.hex('#c9510c').inverse;
const telegramClr = chalk.bold.hex('#0088cc').inverse;
const textClr = chalk.dim.bold.italic.keyword('aquamarine');

// Alerts
const symb = require('log-symbols');
const success = chalk.bold.hex('#6cbc35');
const error = chalk.bold.keyword('orangered');
const info = chalk.bold.hex('#00bce4');
const warning = chalk.bold.keyword('gold');

welcome({
  title: `Juuso Jaakkola`,
  tagLine: `Get to know the Gnostic Developer`, 
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
})

log(`
${chalk.green(`Juuso Jaakkola - Developer`)}

${textClr(`Juuso on laaja-alainen asioiden sisäistäjä ja totuuden etsijä. 
Erityisiä kiinnostuksen kohteita ovat muinaiset viisausperinteet ja 
modernin tieteen löydöt. Näiden erilaisten näkökantojen yhdistäminen 
ja ymmärtäminen antaa Juusolle ainutlaatuisen perspektiivin katsoa 
dynaamista maailmaamme.`)}

${textClr(`Utelias mieli, sähköoppi ja ohjelmointi ovat antaneet Juusolle avaimet,
joilla sukeltaa maailmamme. Näennäisen dualistusuuden läpi näkeminen ja 
ykseyden ymmärtäminen arkisessa elämässä tuottaa Juusolle ja hänen ympärilleen 
päivittäin haasteita ja nautintoa. Hänen kiinnostuksensa on yhtä paljon 
aineettomassa kuin aineellisessakin maailmassa.`)}

${textClr(`Ammatilliset tavoitteet ovat lohkoketjuteknologiaa hyödyntävissä ratkaisuissa 
(Bitcoin & Chainlink?!) ja elämän energian hallitsemisessa omaksi ja muiden 
hyödyksi.`)}


${twitterClr(` Twitter `)} ${chalk.hex('#657786')(`@juusojaa`)}
${githubClr(` GitHub `)} ${chalk.hex('#657786')(`@jaakjuu1`)}
${telegramClr(` Telegram `)} ${chalk.hex('#657786')(`@jne89`)}
`)

alert({type: `info`, msg: `There is a need for speed`, name: `opportunity`})

log(`
${symb.success} ${success(` SUCCESS `)} Thanks for checking this CLI out!
${symb.error} ${error(` ERROR `)} Make mistakes fast and treat them as gifts.
${symb.info} ${info(` INFO `)} More knowledge is available. Feel pleased to contact me.
${symb.warning} ${warning(` WARNING `)} Remember to focus and generate emotion!
`)