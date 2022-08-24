module.exports = {
    plugins: [
        [
            '@tamagui/babel-plugin',
            {
                exclude: /node_modules/,
                config: './tamagui.config.ts',
                components: ['@my/ui', 'tamagui', 'app']
            },
        ],
    ],
}