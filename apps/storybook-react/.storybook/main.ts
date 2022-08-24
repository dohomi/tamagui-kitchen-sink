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
        "storybook-addon-next",
        {
            name: "@storybook/addon-react-native-web",
            options: {
                modulesToTranspile: [
                    "@gorhom/bottom-sheet",
                    "@gorhom/portal",
                    "twrnc",
                    "moti",
                    "zeego",
                ],
                babelPlugins: ["react-native-reanimated/plugin"],
            },
        },
    ],
    core: {
        builder: 'webpack5'
    },
    framework: "@storybook/react",
    // typescript: { reactDocgen: false },
    webpackFinal: async (config, {configType}) => {
        // config.resolve.fallback = {
        //     stream: require.resolve("stream-browserify"),
        //     path: require.resolve("path-browserify"),
        // };
        return config
    },

};
export default config