// import * as NextImage from 'next/image'
import {LmTamaguiProvider} from "app/provider/LmTamaguiProvider";
import {StoryObj} from '@storybook/react'

// const OriginalNextImage = NextImage.default
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />
// })

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

export const decorators = [
    (Story, args: any) => {
        let theme = args.globals.backgrounds?.value === '#33333' ? 'dark' : 'light'
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            theme = 'dark'
        }

        return (
            <>
                <LmTamaguiProvider defaultTheme={theme}>
                    {Story()}
                </LmTamaguiProvider>
            </>
        )
    }
]
