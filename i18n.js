const language = require('./language.json')

const i18n = key => {
  const selectedLanguage = language[language.lang]

  const checkIfItHasStringTranslated = () =>
    typeof selectedLanguage !== 'undefined' &&
    selectedLanguage !== '' &&
    (typeof selectedLanguage[key] !== 'undefined' && selectedLanguage[key] !== '')

  return checkIfItHasStringTranslated() ? selectedLanguage[key] : language.en[key]
}

module.exports = i18n
