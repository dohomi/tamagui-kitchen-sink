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
        return {
            ...config
        };
    },

};
export default config