module.exports = function (api) {
    api.cache(true)
    return {
        presets: [['babel-preset-expo', {jsxRuntime: 'automatic'}]],
        plugins: [
            'inline-dotenv',
            // if you want reanimated support
            // 'react-native-reanimated/plugin',
            // fix android
            ...(process.env.EAS_BUILD_PLATFORM === 'android'
                ? []
                : [
                    [
                        '@tamagui/babel-plugin',
                        {
                            components: ['tamagui-extras', 'tamagui'],
                            config: './tamagui.config.ts',
                        },
                    ],
                ]),
            [
                'transform-inline-environment-variables',
                {
                    include: 'TAMAGUI_TARGET',
                },
            ],
        ]
    }
}
