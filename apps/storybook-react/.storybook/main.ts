import type {StorybookViteConfig} from '@storybook/builder-vite';
const {mergeConfig} = require('vite');
import {tamaguiExtractPlugin, tamaguiPlugin} from '@tamagui/vite-plugin'
import {defineConfig} from 'vite'

const tamaguiConfig = {
    config: './tamagui.config.ts',
    components: ['tamagui', '@tamagui/core', '@my/ui'],
}

const defaultConfig = defineConfig({
    clearScreen: false,
    plugins: [
        tamaguiPlugin({
            ...tamaguiConfig,
            useReactNativeWebLite: true,
        }),
        tamaguiExtractPlugin(tamaguiConfig)
    ],
})

const config: StorybookViteConfig = {
    stories: [
        "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: "@storybook/addon-react-native-web",
            options: {
                modulesToTranspile: [
                    "@tamagui/core",
                    "tamagui",
                    "@my/ui",
                    "app"
                ],
                babelPlugins: [
                    // "react-native-reanimated/plugin",
                    [
                        '@tamagui/babel-plugin',
                        {
                            components: ['tamagui', '@tamagui/core', '@my/ui'],
                            config: './tamagui.config.ts',
                        },
                    ],
                    [
                        'transform-inline-environment-variables',
                        {
                            include: 'TAMAGUI_TARGET',
                        },
                    ],
                ],
            },
        },
    ],
    core: {
        builder: "@storybook/builder-vite",
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
        config.define = config.define || {}
        config.define.global = {}
        return mergeConfig(defaultConfig, config)
    }
};
export default config