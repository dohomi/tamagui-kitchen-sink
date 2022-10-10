# Tamagui + Solito + Next + Expo Kitchen-Sink

This repo is a mono-repo where `tamagui-extras` will be developed to add missing components and functionalities into the
UI framework `tamagui`

## 🔦 About

This monorepo is a kitchen sink for an Expo + Next.js + Tamagui + Solito + Storybook app.

Many thanks to  [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was
forked from. Check out
his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 tamagui-extras

Fully functional [Demo](https://tamagui-extras.vercel.app/) to see all components in action.

### Installation

```
# yarn install tamagui tamagui-extras
```

Follow the installation [instructions](https://tamagui.dev/docs/intro/installation) of the tamagui framework.

### Components

All components are prefixed with `Lm` to have an easy identifier which component belongs to this package.

#### Forms

Form components have a trailing `Rhf` component name for an easy integration with `react-hook-form` library.

Wrap any form component with `LmFormRhfProvider` and add a `LmSubmitButtonRhf` to validate and receive all form values.

```js
import {LmFormRhfProviderProps} from "./LmFormRhfProvider";

function MyForm() {
    return (
        <LmFormRhfProvider>
            <YStack space>
                <LmInputRhf name={'name'} label="Name"/>
                <LmSliderRhf name={'slider'} label="Slider"/>
                <LmSubmitButtonRhf onSubmit={(formData) => {
                    console.log(formData)
                }}>Submit
                </LmSubmitButtonRhf>
            </YStack>
        </LmFormRhfProvider>
    )
}
```

#### Links

[tamagui](https://tamagui.dev/)