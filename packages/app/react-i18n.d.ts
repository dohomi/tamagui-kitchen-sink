import 'react-i18next'
import en from './src/i18n/locales/en.json'
import {defaultNS} from 'src/i18n/i18n'

const resources = {
    en: {
        translation: en
        // tss
    }
} as const

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: defaultNS,
        resources: typeof resources.en;
    }
}
