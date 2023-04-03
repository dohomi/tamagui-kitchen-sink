# tamagui-extras component addon for Tamagui



## 🔦 About

This repo is a mono-repo where `tamagui-extras` will be developed to add missing components and functionalities into the
UI framework `tamagui`

Many thanks to  [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was
forked from. Check out
his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 tamagui-extras

Fully functional [Demo](https://tamagui-extras.vercel.app/) to see all components in action.

### Installation

Install peer dependencies
```
# yarn add tamagui @tamagui/themes tamagui-phosphor-icons solito
# yarn add tamagui-extras
```

Follow the installation [instructions](https://tamagui.dev/docs/intro/installation) of the tamagui framework.

#### Important NextJS config

Due to external dependencies`tamagui-extras`utilizes some components which needs to be transpiled before you are able to
start.

Currently following components must be
transpiled as you can see in the [NextJS app](https://github.com/dohomi/tamagui-kitchen-sink/blob/master/apps/next/next.config.js#L16).

Everytime you face the situation that an error message appears similar
to `SyntaxError: Cannot use import statement outside a module` you might use an node module which is not transpiled for
web.

### Components

All components are prefixed with `Lm` to have an easy identifier which component belongs to this package.

### Integration of `react-hook-form`

Form components have a trailing `Rhf` component name for an easy integration with `react-hook-form` library.

Wrap any form component with `LmFormRhfProvider` and add a `LmSubmitButtonRhf` to validate and receive all form values.

```js
import {LmFormRhfProvider, LmInputRhf, LmSliderRhf, LmSubmitButtonRhf} from "tamagui-extras";
import {YStack} from 'tamagui'

function MyForm() {
    const [mutate, {isLoading}] = useMutation()
    return (
        <LmFormRhfProvider>
            <YStack space>
                <LmInputRhf name={'name'} label="Name"/>
                <LmSliderRhf name={'slider'} label="Slider"/>
                <LmSubmitButtonRhf
                    onSubmit={(formData) => {
                        mutate(formData)
                    }}
                    loading={isLoading}
                >Submit
                </LmSubmitButtonRhf>
            </YStack>
        </LmFormRhfProvider>
    )
}
```

#### Links

[tamagui](https://tamagui.dev/)
