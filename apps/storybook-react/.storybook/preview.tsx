// import * as NextImage from 'next/image'
import {LmTamaguiProvider} from "app/provider/LmTamaguiProvider";


// const OriginalNextImage = NextImage.default
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />
// })

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
      <LmTamaguiProvider>
        <Story />
      </LmTamaguiProvider>
  )
]
