## Tamagui + React-Hook-Form == `@tamagui-extras/form`

### Installation

To use Tamagui and React Hook Form together, install the following packages first:

```sh 
yarn add @tamagui-extras/form
```

### Configuration

Add `@tamagui-extras/form` to the `next.config.js` or `babel.config.js` file to transpile the package.

```js
withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui', '@tamagui-extras/form' /* any other ui components */],
    // the rest of your config
})
```

### Integration of `react-hook-form`

Form components starts with `Lm` have a trailing `Rhf` component name for an easy integration with `react-hook-form`
library.

Wrap any form component with `LmFormRhfProvider` and add a `LmSubmitButtonRhf` to validate and receive all form values.

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

For better Typescript support you can also use the render function of `LmFormRhfProvider`, have a look at following
example:

```tsx
<LmFormRhfProvider
    defaultValues={{
        name: '',
        email: ''
    }}
>
    {({control, handleSubmit, reset}) => (
        <Form gap={'$3'}
              onSubmit={handleSubmit(data => {
                  console.log(data);
              })}
        >
            <LmAlert severity={'info'} outlined>
                <Paragraph>
                    To be type safe use render function as child of LmFormRhfProvider and pass `control`
                    to all form components.
                </Paragraph>
            </LmAlert>
            <LmInputRhf name={'name'} control={control} label={'Name'} placeholder={'Type your name...'} labelInline
                        required/>
            <LmInputRhf name={'email'} control={control} label={'Name'} placeholder={'Type your email...'} labelInline/>
            <XStack gap={'$3'}>
                <LmButton onPress={() => reset()}>Reset</LmButton>
                <Form.Trigger asChild>
                    <LmButton colorVariant={'primary'}>Submit</LmButton>
                </Form.Trigger>
            </XStack>
        </Form>)}
</LmFormRhfProvider>
```

Demo of all components: [Storybook Demo](https://tamagui-extras.vercel.app/?path=/docs/form-autocomplete--documentation)

