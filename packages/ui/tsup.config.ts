import { defineConfig, Options } from 'tsup'

const defConfig: Options = {
  format: ['esm'],
  outExtension: ({ format }) => ({
    js: `.js`,
  }),
  platform: 'neutral',
  target: 'node16',
  external: ['react', 'react-dom', 'react-native-web', 'react-native', 'tamagui'],
}

const files: Options[] = [
  {
    entry: ['./src/index.ts'],
    outDir: 'dist',
  },
  {
    entry: ['./src/form/index.ts'],
    outDir: 'form',
  },
  {
    entry: ['./src/date/index.ts'],
    outDir: 'date',
  },
  {
    entry: ['./src/richText/index.ts'],
    outDir: 'richText',
  },
  {
    entry: ['./src/link/index.ts'],
    outDir: 'link',
  },
  {
    entry: ['./src/file/index.ts'],
    outDir: 'file',
  },
  {
    entry: ['./src/video/index.ts'],
    outDir: 'video',
  },
  {
    entry: ['./src/youtube/index.ts'],
    outDir: 'youtube',
  },
]
export default defineConfig(
  files.map((i) => ({
    ...i,
    ...defConfig,
  }))
)
