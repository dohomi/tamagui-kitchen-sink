import 'react-i18next'
import translation from './src/i18n/locales/en.json'
import {defaultNS} from 'src/i18n/i18n'
// import tss from './public/locales/en/tss.json'

const resources = {
    en: {
        translation
        // tss
    }
} as const

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: defaultNS,
        resources: typeof resources['en'];
    }
}
