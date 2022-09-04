import type {StorybookViteConfig} from '@storybook/builder-vite';
import {tamaguiExtractPlugin, tamaguiPlugin} from '@tamagui/vite-plugin'
import {mergeConfig} from 'vite'

const tamaguiConfig = {
    config: './tamagui.config.ts',
    components: [
        /*'app', '@my/ui', '@my/config',*/ 'tamagui', '@tamagui/core', 'app'
    ],
    logTimings: true,
    importsWhitelist: ['constants.js', 'colors.js'],
    disableExtraction: process.env.NODE_ENV === 'development'
}

const config: StorybookViteConfig = {
    stories: [
        // "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        // "../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    ],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    core: {
        builder: "@storybook/builder-vite",
        disableTelemetry: true,
    },
    framework: "@storybook/react",
    features: {
        // storyStoreV7: true,
    },
    viteFinal(config) {
        return mergeConfig(config, {
            plugins: [
                tamaguiPlugin({
                    ...tamaguiConfig,
                    useReactNativeWebLite: false,
                }),
                tamaguiExtractPlugin(tamaguiConfig),
            ],
            define: {
                global: {},
                TAMAGUI_TARGET: 'web'
            },
            // resolve: {
            //     alias: {
            //         'react-native': 'react-native-web',
            //         'react-native/Libraries/Renderer/shims/ReactFabric': '@tamagui/proxy-worm',
            //         // 'react-native-reanimated': require.resolve('react-native-reanimated'),
            //         // 'react-native-reanimated$': require.resolve('react-native-reanimated'),
            //     },
            // }
        })
    }
};
export default config