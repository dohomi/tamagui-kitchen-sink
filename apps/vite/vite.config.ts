import {defineConfig} from 'vite'
import config from "@tamagui/vite-plugin";

const {tamaguiPlugin, tamaguiExtractPlugin} = config

const tamaguiConfig = {
    config: './tamagui.config.ts',
    components: ['tamagui'],
}

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [react(),]
    plugins: [
        tamaguiPlugin({
            ...tamaguiConfig,
            useReactNativeWebLite: false,
        }),
        tamaguiExtractPlugin(tamaguiConfig),
    ],
    define: {
        'process.env.TAMAGUI_TARGET': 'web'
    }
})
