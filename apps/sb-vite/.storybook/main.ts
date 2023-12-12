import type { StorybookConfig } from '@storybook/react-vite'

import { dirname, join } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-react-i18next'),

    // getAbsolutePath('storybook-addon-next-router'),
    // {
    //   name: getAbsolutePath('@storybook/addon-react-native-web'),
    //   options: {
    //     modulesToTranspile: [
    //       'solito',
    //       'react-native-web',
    //       'react-native',
    //       'expo-linking',
    //       'expo-constants',
    //       'expo-modules-core',
    //       'react-i18next',
    //       'expo-document-picker',
    //       'expo-av',
    //       'expo-asset',
    //       // ...extrasPlugins
    //       // 'app',
    //     ],
    //     babelPlugins: [],
    //   },
    // },
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    config.define = {
      ...config.define,
      'process.env.STORYBOOK': true,
      'process.env.NODE_ENV': configType === 'PRODUCTION' ? 'production' : 'development',
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        //   'react-native/Libraries/Image/AssetRegistry$':
        //     'react-native-web/dist/modules/AssetRegistry',
      },
    }
    return config
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
