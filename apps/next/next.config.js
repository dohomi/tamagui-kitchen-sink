const withPlugins = require('next-compose-plugins')
const {withTamagui} = require('@tamagui/next-plugin')
const withFonts = require('next-fonts')

const withTM = require('next-transpile-modules')([
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-constants',
    'expo-modules-core',
    '@fortawesome/react-native-fontawesome',
    // '@expo/vector-icons',
    '@my/config',
    '@my/ui'
])
// const {withExpo} = require('@expo/next-adapter')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'

const disableExtraction = process.env.NODE_ENV === 'development'
if (disableExtraction) {
    console.log('Disabling static extraction in development mode for better HMR')
}


const transform = withPlugins([
    withTM, // withExpo,
    withFonts,
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
        // disableFontSupport: true,
        disableExtractInlineMedia: true,
        excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'Modal', 'VirtualizedList', 'VirtualizedSectionList', 'AnimatedFlatList', 'FlatList', 'CheckBox', 'Touchable', 'SectionList'],
    })])

/** @type {import('next').NextConfig} */
const config = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
            type: 'asset/resource',
            exclude: (m) => {
                return /node_modules/.test(m) && !/node_modules\/@expo\/vector-icons/.test(m)
            },
        })
        console.log('Im here', config)
        return config
    },
    webpack5: true,
    typescript: {
        ignoreBuildErrors: true
    }, swcMinify: false,
    experimental: {
        plugins: true,
        scrollRestoration: true,
        legacyBrowsers: false,
        browsersListForSwc: true,
    }
}

module.exports = function (name, {defaultConfig}) {
    return transform(name, {
        ...defaultConfig,
        ...config
    })
}
