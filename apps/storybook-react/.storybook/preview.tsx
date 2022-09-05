// import * as NextImage from 'next/image'
import {Provider} from "app/provider";


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
