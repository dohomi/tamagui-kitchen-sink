import path from "path";

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
                    'app',
                    // '@my/ui',
                    '@my/config'
                ],
                babelPlugins: [
                    "react-native-reanimated/plugin",
                ],
            },
        },
    ],
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
    webpackFinal: async (config, {configType}) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            // Resolve react-native to react-native-web
            // 'react-native$': require.resolve('react-native-web'),
            // 'react-native-web$': require.resolve('react-native-web'),
            // @tamagui/rnw exports a couple internal hooks from react-native-web
            // resolve both to CommonJS so they match
            // '@tamagui/rnw': require.resolve('@tamagui/rnw'),
            // optional, for svg icons
            // 'react-native-svg': require.resolve('@tamagui/react-native-svg'),
            '@my/ui': path.resolve(__dirname, '../../node_modules/@my/ui')
        }
        return {
            ...config,
        }
    },
    env: (config) => ({
        ...config,
        TAMAGUI_TARGET: 'web',
        NEXT_PUBLIC_NHOST_SUBDOMAIN: 'estdxowxgohopvfcsipf',
        NEXT_PUBLIC_NHOST_REGION: 'eu-central-1'
    })
};
export default config