import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const isProduction = process.env.NODE_ENV === 'production'

const profiling = isProduction && {
  'react-dom/client': 'react-dom/profiling',
}
const shouldExtract = process.env.EXTRACT === '1'

const extrasPlugins = [
  '@tamagui-extras/core',
  '@tamagui-extras/date',
  '@tamagui-extras/file',
  '@tamagui-extras/form',
  '@tamagui-extras/link',
  '@tamagui-extras/rich-text',
  '@tamagui-extras/video',
  '@tamagui-extras/youtube',
]

const tamaguiConfig = {
  components: [...extrasPlugins, 'tamagui'],
  config: './tamagui.config.ts',
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // extensions: extensions,
    alias: {
      'react-native/Libraries/Image/AssetRegistry': 'react-native-web/dist/modules/AssetRegistry',
      ...profiling,
    },
  },
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
  server: {
    fs: {
      // Load server-side code also from `src`
      allow: ['src'],
      // Enable stricter file checks
      strict: true,
    },
  },
})
