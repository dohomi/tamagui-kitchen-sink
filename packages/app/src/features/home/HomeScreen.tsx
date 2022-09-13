import {Anchor, Button, H1, LmButton, Paragraph, Separator, Sheet, XStack, YStack} from '@my/ui'
import {ChevronDown, ChevronUp} from '@tamagui/feather-icons'
import React, {useState} from 'react'
import {useLink} from 'solito/link'
import {LmThemeToggle} from "app/src/components/various/LmThemeToggle";

export function HomeScreen() {
    const linkProps = useLink({
        href: '/user/nate',
    })
    const overviewProps = useLink({
        href: '/overview',
    })

    const dashboardProps = useLink({
        href: '/dashboard',
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
                <Button {...linkProps}>Link to user</Button>
            </XStack>
            <XStack>
                <LmButton {...overviewProps}>Overview</LmButton>
            </XStack>
            <XStack>
                <LmButton {...dashboardProps}>Dashboard</LmButton>
            </XStack>
            <XStack>
                <LmThemeToggle>Toggle theme</LmThemeToggle>
            </XStack>

            <SheetDemo/>
        </YStack>
    )
}

function SheetDemo() {
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState(0)
    return (
        <>
            <Button
                size="$6"
                icon={open ? ChevronDown : ChevronUp}
                circular
                onPress={() => setOpen((x) => !x)}
            />
            <Sheet
                modal
                open={open}
                onChangeOpen={setOpen}
                snapPoints={[80, 10]}
                position={position}
                onChangePosition={setPosition}
                dismissOnSnapToBottom
            >
                <Sheet.Overlay/>
                <Sheet.Handle/>
                <Sheet.Frame alignItems="center" justifyContent="center">
                    <Button
                        size="$6"
                        circular
                        icon={ChevronDown}
                        onPress={() => {
                            setOpen(false)
                        }}
                    />
                </Sheet.Frame>
            </Sheet>
        </>
    )
}
