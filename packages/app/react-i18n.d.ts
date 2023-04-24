import 'react-i18next'
import en from '../../apps/next/public/locales/en/common.json'

const resources = {
  en: {
    common: en,
    // tss
  },
} as const

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: typeof resources.en
  }
}
