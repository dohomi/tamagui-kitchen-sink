# @tamagui-extras/core Installation and configuration

This package contains components which are not part of the core tamagui framework. You find the installation for
Tamagui [here](https://tamagui.dev/docs/intro/installation)

### Installation of @tamagui/core

```sh
# yarn add @tamagui-extras/core
```

### Configuration of NextJS

Add `@tamagui-extras/core` to the config section of your `next.config.js` file.

```js
withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui', '@tamagui-extras/core'],
    // the rest of your config
})
```

Important: if you bump into compile issues you might have to add the package also to the `transpileModule` section.

Have a look of the NextJS
config -[see example](https://github.com/dohomi/tamagui-kitchen-sink/blob/master/apps/next/next.config.js#L16)

```js
require('next-transpile-modules')(
    [
        'solito',
        'react-native-web',
        'expo-linking',
        'expo-constants',
        'expo-modules-core',
        '@tamagui-extras/core'
        // the rest of the config
    ]
)
```

Everytime you face the situation that an error message appears similar
to `SyntaxError: Cannot use import statement outside a module` you might use an node module which is not transpiled for
web.

### Components

All components are prefixed with `Lm` to have an easy identifier which component belongs to this package.

### Example

```js
import {LmAlert} from "@tamagui-extras/core";
import {YStack} from 'tamagui'

function MyApp() {
    return (
        <YStack space>
            <LmAlert text={"My alert message"}/>
        </YStack>
    )
}
```

### Links

[Storybook Demo](https://tamagui-extras.vercel.app/?path=/docs/core-content-alert--documentation)