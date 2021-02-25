#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome({
  title: pkgJSON.name,
  tagLine: `Get to know the Gnostic Developer`, 
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
})

console.log(`
Juuso Jaakkola - Developer

Juuso on laaja-alainen asioiden sisäistäjä ja totuuden etsijä. 
Erityisiä kiinnostuksen kohteita ovat muinaiset viisausperinteet ja 
modernin tieteen löydöt. Näiden erilaisten näkökantojen yhdistäminen 
ja ymmärtäminen antaa Juusolle ainutlaatuisen perspektiivin katsoa 
dynaamista maailmaamme.

Utelias mieli, sähköoppi ja ohjelmointi ovat antaneet Juusolle avaimet,
joilla sukeltaa maailmamme. Näennäisen dualistusuuden läpi näkeminen ja 
ykseyden ymmärtäminen arkisessa elämässä tuottaa Juusolle ja hänen ympärilleen 
päivittäin haasteita ja nautintoa. Hänen kiinnostuksensa on yhtä paljon 
aineettomassa kuin aineellisessakin maailmassa.

Ammatilliset tavoitteet ovat lohkoketjuteknologiaa hyödyntävissä ratkaisuissa 
(Bitcoin & Chainlink?!) ja elämän energian hallitsemisessa omaksi ja muiden 
hyödyksi. 


Twitter: @juusojaa
Telegram: @jne89

`)
