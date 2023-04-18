# Additional components for Tamagui

## 🔦 About

This repo is a mono-repo for npm `@tamagui-extras/*`. Additional components and functionalities extend the
UI framework `tamagui`

## 📦 @tamagui-extras Storybook

Overview of all components build on top of `tamagui`
[Storybook Demo](https://tamagui-extras.vercel.app/) to see all components in action.

### Requirement

Install peer dependencies

```sh
# yarn add tamagui @tamagui/themes tamagui-phosphor-icons solito
```

Follow the installation [instructions](https://tamagui.dev/docs/intro/installation) of the tamagui framework.

### Packages

`@tamagui-extras` organisation exports following packages:

* `@tamagui-extras/core`[[link]](https://tamagui-extras.vercel.app/?path=/docs/core-content-alert--documentation) - core
  components
* `@tamagui-extras/form`[[link]](https://tamagui-extras.vercel.app/?path=/docs/form-autocomplete--documentation) - form
  components - based on `react-hook-form`
* `@tamagui-extras/link` - link components - based on `solito`
* `@tamagui-extras/file`[[link]](https://tamagui-extras.vercel.app/?path=/docs/file-file-picker--documentation) - file
  components - based on `expo-document-picker`
* `@tamagui-extras/youtube`[[link]](https://tamagui-extras.vercel.app/?path=/docs/youtube-youtube-embed--documentation) -
  youtube iframe component
* `@tamagui-extras/video`[[link]](https://tamagui-extras.vercel.app/?path=/docs/video-video--documentation) - video
  components - based on `expo-av`
* `@tamagui-extras/rich-text`[[link]](https://tamagui-extras.vercel.app/?path=/docs/richtext-tiptap-editor--documentation) -
  rich text editor web only: `tiptap`
* `@tamagui-extras/date`[[link]](https://tamagui-extras.vercel.app/?path=/docs/date-date-selection--documentation) -
  date
  picker and selections

### Important NextJS config

Due to external dependencies`@tamagui-extras/*`utilizes some components which needs to be transpiled before you are able
to
start.

Currently following components must be
transpiled as you can see in
the [NextJS app](https://github.com/dohomi/tamagui-kitchen-sink/blob/master/apps/next/next.config.js#L16).

### Adjusting the build

Add `@tamagui-extras/*` to the `next.config.js` or `babel.config.js` file to transpile the package.

```
{
  loader: 'tamagui-loader',
  options: {
    config: './tamagui.config.ts',
    components: [
      '@tamagui-extras/core',
      '@tamagui-extras/form',
      // add any other packages which uses Tamagui
      'tamagui'
    ]
  }
}
```

#### Good to know

Everytime you face the situation that an error message appears similar
to `SyntaxError: Cannot use import statement outside a module` you might use an node module which is not transpiled for
web.

### Components

All components are prefixed with `Lm[ComponentName]` to have an easy identifier which component belongs to this package.

Code example:

```tsx
import {LmFormRhfProvider, LmInputRhf, LmSubmitButtonRhf} from "@tamagui-extras/form";
import {LmAlert} from "@tamagui-extras/core";
import console = require("console");

function MyForm() {
    return (
        <LmFormRhfProvider>
            <LmAlert severity={'info'}>Some important message</LmAlert>
            <LmInputRhf name={'name'} label="Name"/>
            <LmSubmitButtonRhf onSubmit={(data) => {
                console.log(data)
            }}>Submit</LmSubmitButtonRhf>
        </LmFormRhfProvider>
    )
}
```

### Upgrade Guide >= 0.16

For better code split experience `tamagui-extras` is deprecated and `@tamagui-extras` organisation holds all projects.

#### Links

[tamagui](https://tamagui.dev/)
