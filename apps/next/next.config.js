const withPlugins = require('next-compose-plugins')
const {withTamagui} = require('@tamagui/next-plugin')
const withTM = require('next-transpile-modules')
const path = require("path");

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
        '@fortawesome/react-native-fontawesome',
        'react-i18next',
        '@my/config',
        '@tamagui-extras/ui'
        // '@expo/vector-icons',
    ]),
    withTamagui({
        config: './tamagui.config.ts',
        components: ['@tamagui-extras/ui', 'tamagui'],
        importsWhitelist: ['constants.js', 'colors.js'],
        logTimings: true,
        disableExtraction,
        shouldExtract: (path) => {
            if (path.includes('packages/app')) {
                return true
            }
        },

        // aliasReactPackages: true,
        // disableFontSupport: true,
        disableExtractInlineMedia: true,
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, options) => {
    //
    //     console.log('Im here', config)
    //     config.resolve.alias = {
    //         ...config.resolve.alias,
    //         // your aliases
    //         '@tamagui-extras/ui': 'node_modules/@tamagui-extras/ui'
    //     }
    //     return config
    // },
    webpack5: true,
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false
    },
    experimental: {
        plugins: true,
        scrollRestoration: true,
        legacyBrowsers: false,
        browsersListForSwc: true,
    }
}

module.exports = function (name, {defaultConfig}) {

    let currentConfig = {
        ...defaultConfig,
        ...nextConfig
    };
    // console.log(currentConfig)
    return transform(name, currentConfig)
}
