const { withTamagui } = require('@tamagui/next-plugin')
const { join } = require('path')
const withTM = require('next-transpile-modules') // pass the modules you would like to see transpiled
const { i18n } = require('./next-i18next.config')
const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR')
}

const extrasPlugins = [
  '@tamagui-extras/config',
  '@tamagui-extras/core',
  '@tamagui-extras/date',
  '@tamagui-extras/file',
  '@tamagui-extras/form',
  '@tamagui-extras/link',
  '@tamagui-extras/rich-text',
  '@tamagui-extras/video',
  '@tamagui-extras/youtube',
]

const transpilePackages = [
  'solito',
  'react-native-web',
  'react-native',
  'expo-linking',
  'expo-constants',
  'expo-modules-core',
  'expo-document-picker',
  'expo-av',
  ...extrasPlugins,
  // '@expo/vector-icons',
]

const plugins = [
  withTM(transpilePackages),
  withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui', ...extrasPlugins],
    importsWhitelist: ['constants.js', 'colors.js'],
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    logTimings: true,
    disableExtraction,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true
      }
    },
    useReactNativeWebLite: false, // if enabled dont need excludeReactNativeWebExports
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
  }),
]

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    i18n,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {},
    // transpilePackages: transpilePackages,
    experimental: {
      scrollRestoration: true,
      legacyBrowsers: false,
    },
  }
  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }
  return config
}
