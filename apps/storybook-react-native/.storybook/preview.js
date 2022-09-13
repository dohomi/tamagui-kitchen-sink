import {LmTamaguiProvider} from "app/src/provider/LmTamaguiProvider";

export const decorators = [
    (Story) => {
        // const [loaded] = useFonts({
        //     Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        //     InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
        // })
        //
        // if (!loaded) {
        //     return null
        // }

        return (
            <LmTamaguiProvider>
                <Story/>
            </LmTamaguiProvider>
        )
    }
]

export const parameters = {}
