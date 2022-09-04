// import * as NextImage from 'next/image'
import {Provider} from "app/provider";
import Tamagui from '../tamagui.config'
import {Theme, useDefaultThemeName, useTheme, useThemeName} from "@my/ui";

const css = Tamagui.getCSS()
console.log(css)

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
    (Story) => {
        // todo: enable theme switch. need to bring tamagui provider into front
        return (
            <>
                <Provider>
                    {Story()}
                </Provider>
            </>
        )
    }
]
