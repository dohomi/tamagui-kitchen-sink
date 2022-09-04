import { shouldExclude } from 'tamagui-loader'
import path from 'path'
const projectRoot = path.join(__dirname)
const pkgs = ['tamagui'];
const tamaguiOptions = {
    config: './tamagui.config.ts',
    components: ['tamagui','@tamagui/core'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === 'development',
}
const config = {
    stories: [
        "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        // "storybook-addon-next",
        {
            name: "@storybook/addon-react-native-web",
            options: {
                modulesToTranspile: [
                    // "@gorhom/bottom-sheet",
                    // "@gorhom/portal",
                    // "twrnc",
                    // "moti",
                    // "zeego",
                    // 'tamagui',
                    // '@tamagui/core',
                    'app',
                    '@my/ui',
                    '@my/config'
                ],
                babelPlugins: [
                    "react-native-reanimated/plugin",
                    // [
                    //     '@tamagui/babel-plugin',
                    //     {
                    //         exclude: /node_modules/,
                    //         config: './tamagui.config.ts',
                    //         components: ['app', 'tamagui', '@tamagui/core']
                    //     },
                    // ],
                ],
            },
        },
    ],
    features: {
        // babelModeV7: true,
    },
    core: {
        builder: 'webpack5'
    },
    framework: "@storybook/react",
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    // typescript: { reactDocgen: false },
    webpackFinal: async (config, {configType}) => {
        // config.resolve.fallback = {
        //     stream: require.resolve("stream-browserify"),
        //     path: require.resolve("path-browserify"),
        // };
        config.resolve.alias = {
            ...config.resolve.alias,
            // Resolve react-native to react-native-web
            // 'react-native$': require.resolve('react-native-web'),
            // 'react-native-web$': require.resolve('react-native-web'),
            // @tamagui/rnw exports a couple internal hooks from react-native-web
            // resolve both to CommonJS so they match
            '@tamagui/rnw': require.resolve('@tamagui/rnw'),
            // optional, for svg icons
            'react-native-svg': require.resolve('@tamagui/react-native-svg'),
        }
        return {
            ...config,
        }
    },
    env: (config) => ({
        ...config,
        TAMAGUI_TARGET: 'web'
    })
};
export default config