/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const {withTamagui} = require('@tamagui/next-plugin')
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')
const { withExpo } = require('@expo/next-adapter')

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
        'react-native-vector-icons',
        '@my/config',
    ]),
    withTamagui({
        config: './tamagui.config.ts',
        components: ['tamagui', '@my/ui'],
        importsWhitelist: ['constants.js', 'colors.js'],
        logTimings: true,
        disableExtraction,
        shouldExtract: (path) => {
            if (path.includes('packages/app')) {
                return true
            }
        },
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
            'SectionList',
        ],
    }),
    withExpo,
    withFonts
])

module.exports = function (name, {defaultConfig}) {
    defaultConfig.webpack5 = true
    // defaultConfig.experimental.reactRoot = 'concurrent'
    defaultConfig.typescript.ignoreBuildErrors = true
    return transform(name, {
        ...defaultConfig,
        webpack5: true,
        webpack: (config, options) => {
            config.module.rules.push({
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                type: 'asset/resource',

            })
            return config
        },
        experimental: {
            plugins: true,
            scrollRestoration: true,
            legacyBrowsers: false,
            browsersListForSwc: true,
        },
    })
}
