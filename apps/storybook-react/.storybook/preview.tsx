// import * as NextImage from 'next/image'
import {useThemeState} from "app/src/state/themeState";
import {Provider} from "app/src/provider";

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
    },
    backgrounds: {
        values: [
            {
                name: 'dark',
                value: '#151515',
            },
            {
                name: 'light',
                value: 'hsl(0, 0%, 99.0%)',
            },
        ],
    },
}

export const decorators = [
    (Story, args: any) => {
        const name = useThemeState(state => state.name)
        let theme = args.globals.backgrounds?.value === '#151515' ? 'dark' : 'light'
        if (!args.globals.backgrounds && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            theme = 'dark'
        }
        return (
            <>
                <Provider defaultTheme={name || theme}>
                    <Story/>
                </Provider>
            </>
        )
    }
]
