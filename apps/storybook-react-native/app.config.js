export default {
  name: 'Storybook',
  description: 'Storybook',
  slug: 'storybook-react-native',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.storybook.png',
  scheme: 'com.example.storybook',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#000000'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    jsEngine: 'hermes'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FF0000'
    },
    jsEngine: 'hermes'
  }
}
