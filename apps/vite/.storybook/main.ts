import {mergeConfig} from "vite"
import {tamaguiExtractPlugin, tamaguiPlugin} from "@tamagui/vite-plugin"

const tamaguiConfig = {
    config: './tamagui.config.ts',
    components: ['tamagui'],
}

const config = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../../../packages/ui/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    // "features": {
    //     "storyStoreV7": true
    // },
    "env": (config) => ({
        ...config,
        TAMAGUI_TARGET: 'web',
        NEXT_PUBLIC_NHOST_SUBDOMAIN: 'estdxowxgohopvfcsipf',
        NEXT_PUBLIC_NHOST_REGION: 'eu-central-1'
    }),
    async viteFinal(config, {configType}) {
        // return the customized config
        return mergeConfig(config, {
            plugins: [
                tamaguiPlugin({
                    ...tamaguiConfig,
                    useReactNativeWebLite: false,

                }),
                tamaguiExtractPlugin(tamaguiConfig),
            ],
            // customize the Vite config here
            // resolve: {
            //     alias: {foo: 'bar'},
            // },
        });
    },
}

export default config