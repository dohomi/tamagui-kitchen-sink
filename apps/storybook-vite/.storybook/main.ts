import type {StorybookViteConfig} from '@storybook/builder-vite';
import {tamaguiExtractPlugin, tamaguiPlugin} from '@tamagui/vite-plugin'
import {defineConfig, mergeConfig} from 'vite'
import {shouldExclude} from "tamagui-loader";
import path from "path";
const projectRoot = path.resolve(__dirname, "..")

const target = process.env.TARGET || 'css'

const tamaguiOptions = {
    config: './tamagui.config.ts',
    components: ['tamagui', '@my/ui', 'app'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === 'development'
}
// const tamaguiConfig = {
//     config: './tamagui.config.ts',
//     components: ['tamagui', '@my/ui', 'app']
// }

// const defaultConfig = defineConfig({
//     clearScreen: false,
//     plugins: [
//         tamaguiPlugin({
//             ...tamaguiConfig,
//             useReactNativeWebLite: false,
//         }),
//         tamaguiExtractPlugin(tamaguiConfig)
//     ],
// })

const config: StorybookViteConfig = {
    stories: [
        "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        // {
        //     name: "@storybook/addon-react-native-web",
        //     options: {
        //         modulesToTranspile: [
        //             "react-native-vector-icons",
        //             "tamagui",
        //             "@my/ui",
        //             "app"
        //         ],
        //         babelPlugins: [
        //             // "react-native-reanimated/plugin",
        //             [
        //                 '@tamagui/babel-plugin',
        //                 {
        //                     components: ['tamagui', '@tamagui/core', '@my/ui'],
        //                     config: './tamagui.config.ts',
        //                 },
        //             ],
        //             [
        //                 'transform-inline-environment-variables',
        //                 {
        //                     include: 'TAMAGUI_TARGET',
        //                 },
        //             ],
        //         ],
        //     },
        // },
    ],
    core: {
        builder: "@storybook/builder-vite",
        disableTelemetry: true,
    },
    framework: "@storybook/react",
    // typescript: { reactDocgen: false },
    // webpackFinal: async (config, { configType }) => {
    //   // config.resolve.fallback = {
    //   //   stream: require.resolve("stream-browserify"),
    //   //   path: require.resolve("path-browserify"),
    //   // };
    //   return config;
    // },
    viteFinal(config) {
        // return mergeConfig(defaultConfig, config)
        return mergeConfig(config, {
            define: {
                global: {},
            },
            resolve: {
                alias: {
                    'react-native': 'react-native-web',
                    'react-native/Libraries/Renderer/shims/ReactFabric': '@tamagui/proxy-worm',
                    // 'react-native-reanimated': require.resolve('react-native-reanimated'),
                    // 'react-native-reanimated$': require.resolve('react-native-reanimated'),
                },
            },
            module: {
                rules: [
                    {
                        test: /\.[jt]sx?$/,
                        // todo
                        exclude: path => shouldExclude(path, projectRoot),
                        use: [
                            // todo: get thread-loader working later
                            // optionally thread-loader for significantly faster compile!
                            // 'thread-loader',
                            //
                            // {
                            //     loader: 'esbuild-loader',
                            //     options: {
                            //         loader: 'tsx',
                            //         minify: process.env.NODE_ENV === 'production',
                            //     },
                            // },
                            {
                                loader: 'tamagui-loader',
                                options:  tamaguiOptions
                            },
                        ]
                    }
                ]
            },
        })
    }
};
export default config