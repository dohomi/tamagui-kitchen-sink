const pkgs = ['tamagui', '@my/config', '@my/ui', 'app'];

module.exports = function (api) {
    api.cache(true)
    return {
        presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
        plugins: [
            [
                '@tamagui/babel-plugin',
                {
                    components: pkgs,
                    config: './tamagui.config.ts',
                },
            ],
            ['transform-inline-environment-variables', {
                include: 'TAMAGUI_TARGET'
            }]
        ],
    }
}
