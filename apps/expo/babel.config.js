const extrasPlugins = [
  '@tamagui-extras/config',
  '@tamagui-extras/core',
  '@tamagui-extras/date',
  '@tamagui-extras/file',
  '@tamagui-extras/form',
  '@tamagui-extras/link',
  '@tamagui-extras/rich-text',
  '@tamagui-extras/video',
  '@tamagui-extras/youtube',
]
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      require.resolve('expo-router/babel'),
      // if you want reanimated support
      // 'react-native-reanimated/plugin',
      // fix android
      ...(process.env.EAS_BUILD_PLATFORM === 'android'
        ? []
        : [
            [
              '@tamagui/babel-plugin',
              {
                components: [...extrasPlugins, 'tamagui'],
                config: './tamagui.config.ts',
              },
            ],
          ]),
    ],
  }
}
