

const config = {
    stories: [
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
                    "tamagui",
                    "@my/ui",
                    "app"
                ],
                babelPlugins: [
                    // "react-native-reanimated/plugin",
                    [
                        '@tamagui/babel-plugin',
                        {
                            components: ['tamagui', '@my/ui'],
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
        builder: 'webpack5'
    //     builder: "@storybook/builder-vite",
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

};
export default config