const pkgs = ['tamagui'];
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
                    //         components: ['app', 'tamagui']
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

        return {
            ...config
        }
    },

};
export default config