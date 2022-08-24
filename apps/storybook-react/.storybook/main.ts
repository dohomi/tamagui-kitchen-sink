const pkgs = ['tamagui', '@tamagui/core', '@tamagui/portal', '@tamagui/config-base', '@tamagui/use-window-size', '@tamagui/use-force-update', '@tamagui/use-debounce', '@my/config', '@my/ui', 'app'];
const config = {
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
                modulesToTranspile: pkgs,
                babelPlugins: [
                    // "react-native-reanimated/plugin",
                    [
                        '@tamagui/babel-plugin',
                        {
                            components: pkgs,
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
    },
    framework: "@storybook/react",
    // typescript: { reactDocgen: false },
    webpackFinal: async (config, {configType}) => {
        // config.resolve.fallback = {
        //   stream: require.resolve("stream-browserify"),
        //   path: require.resolve("path-browserify"),
        // };
        return {
            ...config,
            // module: {
            //     ...config.module,
            //     rules: [
            //         ...config.module.rules,
            //         {
            //             test: /\.[jt]sx?$/,
            //             // todo
            //             exclude: path => shouldExclude(path, projectRoot),
            //             use: [
            //                 // todo: get thread-loader working later
            //                 // optionally thread-loader for significantly faster compile!
            //                 // 'thread-loader',
            //                 //
            //                 // {
            //                 //     loader: 'esbuild-loader',
            //                 //     options: {
            //                 //         loader: 'tsx',
            //                 //         minify: process.env.NODE_ENV === 'production',
            //                 //     },
            //                 // },
            //                 {
            //                     loader: 'tamagui-loader',
            //                     options:  tamaguiOptions
            //                 },
            //             ]
            //         }
            //     ]
            // },
        };
    },

};
export default config