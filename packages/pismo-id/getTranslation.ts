import translation from './translation.json'

function getTranslation () {
  let lang =
    (navigator as any).language || (navigator as any).userLanguage || 'en-US'
  lang = lang.substr(0, 2).toLowerCase()

  return translation[lang]
}

export { getTranslation }
