import {H2, H3, LmButton, LmIcon, Separator, XStack, YStack} from '@my/ui'
import React from 'react'
import {faSafari} from "@fortawesome/free-brands-svg-icons/faSafari";


export function OverviewScreen() {

    return (
        <YStack flex={1} justifyContent="flex-start" alignItems="center" padding="$4" space>
            <YStack space="$4" maxWidth={600}>
                <H2 textAlign="center">Components Overview</H2>
            </YStack>
            <Separator/>
            <XStack>
                <H3>Button Sizes</H3>
            </XStack>
            <XStack space={'$4'}>
                <LmButton size={'$2'}>size 2</LmButton>
                <LmButton size={'$4'}>size 4</LmButton>
                <LmButton size={'$6'}>size 6</LmButton>
                <LmButton size={'$8'}>size 8</LmButton>
                <LmButton size={'$10'}>size 10</LmButton>
            </XStack>
            <XStack>
                <H3>Button Colors</H3>
            </XStack>
            <XStack space={'$4'}>
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
                <XStack space={'$4'}>
                    <LmButton size={'$2'} loading>size 2</LmButton>
                    <LmButton size={'$4'} loading>size 4</LmButton>
                    <LmButton size={'$6'} loading>size 6</LmButton>
                    <LmButton size={'$8'} loading>size 8</LmButton>
                </XStack>
                <XStack space={'$4'}>
                    <LmButton size={'$2'} loading colorVariant={'primary'}>size 2</LmButton>
                    <LmButton size={'$4'} loading colorVariant={'secondary'}>size 4</LmButton>
                    <LmButton size={'$6'} loading themeName={'dark_pink_alt1'}>size 6</LmButton>
                    <LmButton size={'$8'} loading>size 8</LmButton>
                </XStack>
            </YStack>
            <XStack>
                <H3>Buttons Icons</H3>
            </XStack>
            <YStack space={'$4'}>
                <XStack space={'$4'}>
                    <LmButton size={'$2'} icon={<LmIcon iconName={faSafari}/>}>size 2</LmButton>
                    <LmButton size={'$4'} icon={<LmIcon iconName={faSafari}/>}>size 4</LmButton>
                    <LmButton size={'$6'} icon={<LmIcon iconName={faSafari}/>}>size 6</LmButton>
                    <LmButton size={'$8'} icon={<LmIcon iconName={faSafari}/>}>size 8</LmButton>
                </XStack>
                <XStack space={'$4'}>
                    <LmButton size={'$2'} iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'primary'}>size
                        2</LmButton>
                    <LmButton size={'$4'} iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'secondary'}>size
                        4</LmButton>
                    <LmButton size={'$6'} iconAfter={<LmIcon iconName={faSafari}/>} themeName={'dark_pink_alt1'}>size
                        6</LmButton>
                    <LmButton size={'$8'} iconAfter={<LmIcon iconName={faSafari}/>}>size 8</LmButton>
                </XStack>
            </YStack>
        </YStack>
    )
}
