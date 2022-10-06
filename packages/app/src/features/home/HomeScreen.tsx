import {Anchor, Button, H1, LmButton, Paragraph, Separator, XStack, YStack} from 'tamagui-extras'
import {ChevronDown} from '@tamagui/feather-icons'
import React from 'react'
import {useLink} from 'solito/link'
import {LmThemeToggle} from "app/src/components/various/LmThemeToggle";
import {useToggleMainDrawer} from "app/src/state/appState";

export function HomeScreen() {

    const overviewProps = useLink({
        href: '/overview',
    })


    const playgroundProps = useLink({
        href: '/playground',
    })

    return (
        <YStack flex={1} justifyContent="center" alignItems="center" padding="$4" space>
            <YStack space="$4" maxWidth={600}>
                <H1 textAlign="center">Welcome to Tamagui.</H1>
                <Separator/>
                <Paragraph textAlign="center" size={'$2'}>
                    Tamagui is made by{' '}
                    <Anchor href="https://twitter.com/natebirdman" target="_blank">
                        Nate Wienert
                    </Anchor>
                    , give it a star{' '}
                    <Anchor href="https://github.com/tamagui/tamagui" target="_blank" rel="noreferrer">
                        on Github
                    </Anchor>
                    .
                </Paragraph>
            </YStack>

            <XStack>
                <LmButton {...overviewProps}>Overview</LmButton>
            </XStack>
            <XStack>
                <LmButton {...playgroundProps}>Playground</LmButton>
            </XStack>
            <XStack>
                <LmThemeToggle>Toggle theme</LmThemeToggle>
            </XStack>
            <SheetDemo/>
        </YStack>
    )
}

function SheetDemo() {
    const toggleMainDrawer = useToggleMainDrawer()

    return (
        <>
            <Button
                size="$6"
                icon={ChevronDown}
                circular
                onPress={() => toggleMainDrawer()}
            />
            {/*<LmAppDrawer/>*/}
        </>
    )
}
