const withPlugins = require('next-compose-plugins')
const {withTamagui} = require('@tamagui/next-plugin')
const withTM = require('next-transpile-modules')
const {join} = require('path')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'

const disableExtraction = process.env.NODE_ENV === 'development'
if (disableExtraction) {
    console.log('Disabling static extraction in development mode for better HMR')
}

const transform = withPlugins([
    withTM([
        'solito',
        'react-native-web',
        'expo-linking',
        'expo-constants',
        'expo-modules-core',
        'expo-document-picker',
        'expo-asset',
        'expo-av',
        'react-i18next',
        '@my/config',
        // 'tamagui-extras'
        // '@expo/vector-icons',
    ]),
    withTamagui({
        config: './tamagui.config.ts',
        components: ['tamagui-extras', 'tamagui'],
        importsWhitelist: ['constants.js', 'colors.js'],
        logTimings: true,
        disableExtraction,
        shouldExtract: (path) => {
            if (path.includes(join('packages', 'app'))) {
                return true
            }
        },

        // aliasReactPackages: true,
        // disableFontSupport: true,
        disableExtractInlineMedia: true,
        useReactNativeWebLite: false, // if enabled dont need excludeReactNativeWebExports
        excludeReactNativeWebExports: [
            'Switch',
            'ProgressBar',
            'Picker',
            'Modal',
            'VirtualizedList',
            'VirtualizedSectionList',
            'AnimatedFlatList',
            'FlatList',
            'CheckBox',
            'Touchable',
            'SectionList'
        ],
    })])

module.exports = function (name, {defaultConfig}) {
    defaultConfig.webpack5 = true
    // defaultConfig.experimental.reactRoot = 'concurrent'
    defaultConfig.typescript.ignoreBuildErrors = true
    /** @type {import('next').NextConfig} */
    const currentConfig = {
        ...defaultConfig,
        webpack5: true,
        i18n: {
            defaultLocale: 'en',
            locales: ['en', 'de', 'fr']
        },
        experimental: {
            plugins: true,
            scrollRestoration: true,
            legacyBrowsers: false,
            browsersListForSwc: true,
        }
    };
    return transform(name, currentConfig)
}
