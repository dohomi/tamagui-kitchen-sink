import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import EN from '../next/public/locales/en/common.json'
import DE from '../next/public/locales/de/common.json'

const ns = ['common']
const supportedLngs = ['en', 'de']

i18n.use(initReactI18next).init({
  //debug: true,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // because of expo rn
  interpolation: { escapeValue: false },
  supportedLngs,
  ns,
  defaultNS: 'common',
  resources: {
    en: {
      common: EN,
    },
    de: { common: DE },
  },
})

export default i18n
