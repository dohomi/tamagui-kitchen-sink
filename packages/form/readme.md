## Tamagui + React-Hook-Form

### Installation

```bash 
npm install @tamagui-extras/form
```

### Set up build

Add `@tamagui-extras/form` to the `next.config.js` or `babel.config.js` file to transpile the package.

```json
{
  loader: 'tamagui-loader',
  options: {
    config: './tamagui.config.ts',
    components: [
      '@tamagui-extras/form',
      'tamagui'
    ]
  }
}
```

### Integration of `react-hook-form`

Form components have a trailing `Rhf` component name for an easy integration with `react-hook-form` library.

Wrap any form component with `LmFormRhfProvider` and add a `LmSubmitButtonRhf` to validate and receive all form values.

Demo of all components: [Storybook Demo](https://tamagui-extras.vercel.app/?path=/docs/form-autocomplete--documentation)

### Usage

```tsx
import {LmFormRhfProvider, LmInputRhf, LmSliderRhf, LmSubmitButtonRhf} from "@tamagui-extras/form";
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
