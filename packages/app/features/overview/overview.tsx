import {H2, H3, LmButton, LmIcon, Separator, LmInput, XStack, YStack, XGroup, YGroup} from '@my/ui'
import React from 'react'
import {faSafari} from "@fortawesome/free-brands-svg-icons/faSafari";
import {ScrollView} from "react-native";
import {useTheme} from "tamagui";


export function OverviewScreen() {

    const {} = useTheme()

    return (
        <ScrollView>
            <YStack flex={1} justifyContent="flex-start" alignItems="center" padding="$4" space>
                <YStack space="$4">
                    <H2 textAlign="center">Components Overview</H2>
                </YStack>
                <Separator/>
                <XStack>
                    <H3>Button Sizes</H3>
                </XStack>
                <XStack space={'$4'} flexWrap={'wrap'}>
                    <LmButton size={'$2'}>size 2</LmButton>
                    <LmButton size={'$4'}>size 4</LmButton>
                    <LmButton size={'$6'}>size 6</LmButton>
                    <LmButton size={'$8'}>size 8</LmButton>
                </XStack>
                <XStack>
                    <H3>Button Colors</H3>
                </XStack>
                <XStack space={'$4'} flexWrap={'wrap'}>
                    <LmButton colorVariant={'primary'}>primary</LmButton>
                    <LmButton colorVariant={'secondary'}>secondary</LmButton>
                    <LmButton colorVariant={'success'}>success</LmButton>
                    <LmButton colorVariant={'info'}>info</LmButton>
                    <LmButton colorVariant={'warning'}>warning</LmButton>
                    <LmButton colorVariant={'error'}>error</LmButton>
                    <LmButton themeName={'dark_gray_alt2'}>dark gray alt</LmButton>
                </XStack>
                <XStack>
                    <H3>Buttons Loading</H3>
                </XStack>
                <YStack space={'$4'}>
                    <XStack space={'$4'} flexWrap={'wrap'}>
                        <LmButton size={'$2'} loading>size 2</LmButton>
                        <LmButton size={'$4'} loading>size 4</LmButton>
                        <LmButton size={'$6'} loading>size 6</LmButton>
                    </XStack>
                    <XStack space={'$4'} flexWrap={'wrap'}>
                        <LmButton size={'$2'} loading colorVariant={'primary'}>size 2</LmButton>
                        <LmButton size={'$4'} loading colorVariant={'secondary'}>size 4</LmButton>
                        <LmButton size={'$6'} loading themeName={'dark_pink_alt1'}>size 6</LmButton>
                    </XStack>
                </YStack>
                <XStack>
                    <H3>Buttons Icons</H3>
                </XStack>
                <YStack space={'$4'}>
                    <XStack space={'$4'} flexWrap={'wrap'}>
                        <LmButton size={'$2'} icon={<LmIcon iconName={faSafari}/>}>size 2</LmButton>
                        <LmButton size={'$4'} icon={<LmIcon iconName={faSafari}/>}>size 4</LmButton>
                    </XStack>
                    <XStack space={'$4'} flexWrap={'wrap'}>
                        <LmButton size={'$2'} iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'primary'}>size
                            2</LmButton>
                        <LmButton size={'$4'} iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'secondary'}>size
                            4</LmButton>

                    </XStack>
                </YStack>
                <XStack>
                    <H3>Buttons Groups</H3>
                </XStack>
                <YStack space={'$4'}>
                    <XGroup>
                        <LmButton icon={<LmIcon iconName={faSafari}/>}>size 2</LmButton>
                        <LmButton icon={<LmIcon iconName={faSafari}/>}>size 4</LmButton>
                    </XGroup>
                    <Separator />
                    <YGroup>
                        <LmButton iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'primary'}>size
                            2</LmButton>
                        <LmButton iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'secondary'}>size
                            4</LmButton>

                    </YGroup>
                </YStack>
                <XStack>
                    <H3>Input sizes</H3>
                </XStack>
                <XStack space={'$4'} flexWrap={'wrap'}>
                    <LmInput size={'$2'}/>
                    <LmInput size={'$4'}/>
                    <LmInput size={'$6'}/>
                </XStack>
                <XStack>
                    <H3>Input variants</H3>
                </XStack>
                <XStack space={'$4'} flexWrap={'wrap'}>
                    <LmInput size={'$4'} colorVariant={'primary'}/>
                    <LmInput size={'$4'} colorVariant={'secondary'}/>
                    <LmInput size={'$4'} colorVariant={'success'}/>
                    <LmInput size={'$4'} colorVariant={'error'}/>
                    <LmInput size={'$4'} colorVariant={'warning'}/>
                    <LmInput size={'$4'} colorVariant={'info'}/>
                </XStack>
                <XStack>
                    <H3>Input multiline (TextArea)</H3>
                </XStack>
                <XStack space={'$4'} flexWrap={'wrap'}>
                    <LmInput size={'$4'} colorVariant={'primary'} multiline/>
                    <LmInput size={'$4'} colorVariant={'secondary'} multiline/>
                </XStack>
                <XStack>
                    <H3>Input label / placeholder / value</H3>
                </XStack>
                <XStack space={'$4'} flexDirection={'column'} flexWrap={'wrap'}>
                    <LmInput size={'$4'} defaultValue={'With default value'}/>
                    <LmInput size={'$4'} placeholder={'With placeholder text'}/>
                </XStack>
                <XStack>
                    <LmInput size={'$4'} placeholder={'With label text'}
                             labelProps={{htmlFor: 'labelInput', marginRight: '$2'}} labelText={'Label Text'}/>
                </XStack>
                <YStack>
                    <LmInput size={'$4'} placeholder={'With label text, YStack'} labelProps={{htmlFor: 'labelInput'}}
                             labelText={'Label Text'}/>
                </YStack>
            </YStack>
        </ScrollView>
    )
}
