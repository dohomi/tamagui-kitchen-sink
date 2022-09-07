const {withExpo} = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const {withTamagui} = require("@tamagui/next-plugin");
const withTM = require('next-transpile-modules')([
    'solito',
    'react-native-vector-icons',
    'app'
])
process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'

const disableExtraction = process.env.NODE_ENV === 'development'
if (disableExtraction) {
    console.log('Disabling static extraction in development mode for better HMR')
}


const transform = withPlugins([
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
            'VirtualizedList', 'VirtualizedSectionList', 'AnimatedFlatList', 'FlatList', 'CheckBox', 'Touchable', 'SectionList'],
    }),
    withTM,
    withFonts,
    withImages,
    withExpo
])

/** @type {import('next').NextConfig} */
const config = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
            type: 'asset/resource'
        })
        return config
    }
}

module.exports = function (name, {defaultConfig}) {
    return transform(name, {
        ...defaultConfig,
        ...config,
        webpack5: true,
        reactStrictMode: true
    })
}
