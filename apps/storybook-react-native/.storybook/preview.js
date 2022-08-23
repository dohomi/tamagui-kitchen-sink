import {LmTamaguiProvider} from "app/provider/LmTamaguiProvider";

export const decorators = [
    (Story) => (
        <LmTamaguiProvider>
            <Story/>
        </LmTamaguiProvider>
    )
]

export const parameters = {}
