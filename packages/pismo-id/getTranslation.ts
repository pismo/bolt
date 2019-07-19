import * as translation from './translation.json'

function getTranslation () {
  let lang = navigator.language || navigator.userLanguage || 'en-US'
  lang = lang.substr(0, 2).toLowerCase()

  return translation.default[lang]
}

export { getTranslation }
