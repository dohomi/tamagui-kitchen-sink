// @ts-ignore
import path, { resolve } from 'path'
import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    // '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../../../packages/core/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../../../packages/form/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../../../packages/date/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../../../packages/rich-text/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../../../packages/video/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../../../packages/youtube/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'solito',
          // 'react-native-web',
          'expo-linking',
          'expo-constants',
          'expo-modules-core',
          // 'react-i18next',
          'expo-document-picker',
          'expo-av',
          'expo-asset',
        ],

        babelPlugins: [
          // "react-native-reanimated/plugin", // this breaks...
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      // nextConfigPath: path.resolve(projectRoot, 'next.config.js'),
    },
  },
  webpackFinal: async (config, { configType }) => {
    return config
  },
  env: (config) => ({
    ...config,
    TAMAGUI_TARGET: 'web',
  }),
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
}
export default config
