import 'react-i18next'
import en from './src/i18n/locales/en.json'

const resources = {
    en: {
        translation: en
        // tss
    }
} as const

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation',
        resources: typeof resources.en;
    }
}
