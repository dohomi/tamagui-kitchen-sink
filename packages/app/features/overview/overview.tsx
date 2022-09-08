import {
    H2,
    H3,
    LmButton,
    LmIcon,
    Separator,
    LmInput,
    XStack,
    YStack,
    XGroup,
    YGroup,
    H1,
    H4,
    H5,
    H6,
    SizableText,
    LmAvatar, SpaceTokens
} from '@my/ui'
import React from 'react'
import {faSafari} from "@fortawesome/free-brands-svg-icons/faSafari";
import {ScrollView} from "react-native";
import {useTheme} from "tamagui";


export function OverviewScreen() {

    const {} = useTheme()
    const defaultSectionProps: {
        space?: SpaceTokens | null
        flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'
    } = {
        space: '$4',
        flexWrap: 'wrap'
    }

    return (
        <ScrollView>
            <YStack flex={1} justifyContent="flex-start" alignItems="flex-start" padding="$4" space
                    backgroundColor={'$blue1'} maxWidth={'100%'}>
                <H2 alignSelf="center">Components Overview</H2>
                <XStack {...defaultSectionProps}>
                    <YStack>
                        <H3>Headings</H3>
                        <H1>Heading 1</H1>
                        <H2>Heading 2</H2>
                        <H3>Heading 3</H3>
                        <H4>Heading 4</H4>
                        <H5>Heading 5</H5>
                        <H6>Heading 6</H6>
                    </YStack>
                    <YStack>
                        <H3>Sizeable Text</H3>
                        <SizableText theme="alt1" size="$2">Size 2</SizableText>
                        <SizableText theme="alt1" size="$4">Size 4</SizableText>
                        <SizableText theme="alt1" size="$6">Size 6</SizableText>
                        <SizableText theme="alt1" size="$8">Size 8</SizableText>
                    </YStack>
                </XStack>
                <H3>Button Sizes</H3>
                <XStack {...defaultSectionProps}>
                    <LmButton size={'$2'} themeName={'dark_yellow_alt1'}>size 2</LmButton>
                    <LmButton size={'$4'} themeName={'dark_yellow_alt1'}>size 4</LmButton>
                    <LmButton size={'$6'} themeName={'dark_yellow_alt1'}>size 6</LmButton>
                    <LmButton size={'$8'} themeName={'dark_yellow_alt1'}>size 8</LmButton>
                </XStack>
                <H3>Button Colors</H3>
                <YStack {...defaultSectionProps}>
                    <XStack space={'$2'} flexWrap={'wrap'}>
                        <LmButton colorVariant={'primary'}>primary</LmButton>
                        <LmButton colorVariant={'secondary'}>secondary</LmButton>
                        <LmButton colorVariant={'success'}>success</LmButton>
                    </XStack>
                    <XStack space={'$2'} flexWrap={'wrap'}>
                        <LmButton colorVariant={'info'}>info</LmButton>
                        <LmButton colorVariant={'warning'}>warning</LmButton>
                        <LmButton colorVariant={'error'}>error</LmButton>
                        <LmButton themeName={'dark_gray_alt2'}>dark gray alt</LmButton>
                    </XStack>
                </YStack>
                <H3>Buttons Loading</H3>
                <YStack {...defaultSectionProps}>
                    <XStack {...defaultSectionProps}>
                        <LmButton size={'$2'} loading>size 2</LmButton>
                        <LmButton size={'$4'} loading>size 4</LmButton>
                        <LmButton size={'$6'} loading>size 6</LmButton>
                    </XStack>
                    <XStack {...defaultSectionProps}>
                        <LmButton size={'$2'} loading colorVariant={'primary'}>size 2</LmButton>
                        <LmButton size={'$4'} loading colorVariant={'secondary'}>size 4</LmButton>
                        <LmButton size={'$6'} loading themeName={'dark_pink_alt1'}>size 6</LmButton>
                    </XStack>
                </YStack>
                <H3>Buttons Icons</H3>
                <YStack space={'$4'}>
                    <XStack {...defaultSectionProps}>
                        <LmButton size={'$2'} icon={<LmIcon iconName={faSafari}/>}>size 2</LmButton>
                        <LmButton size={'$4'} icon={<LmIcon iconName={faSafari}/>}>size 4</LmButton>
                    </XStack>
                    <XStack {...defaultSectionProps}>
                        <LmButton size={'$2'} iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'primary'}>size
                            2</LmButton>
                        <LmButton size={'$4'} iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'secondary'}>size
                            4</LmButton>

                    </XStack>
                </YStack>
                <H3>Buttons Groups</H3>
                <YStack {...defaultSectionProps}>
                    <XGroup>
                        <LmButton icon={<LmIcon iconName={faSafari}/>}>size 2</LmButton>
                        <LmButton icon={<LmIcon iconName={faSafari}/>}>size 4</LmButton>
                    </XGroup>
                    <YGroup>
                        <LmButton iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'primary'}>size
                            2</LmButton>
                        <LmButton iconAfter={<LmIcon iconName={faSafari}/>} colorVariant={'secondary'}>size
                            4</LmButton>

                    </YGroup>
                </YStack>
                <H3>Input sizes</H3>
                <XStack {...defaultSectionProps}>
                    <LmInput size={'$2'}/>
                    <LmInput size={'$4'}/>
                    <LmInput size={'$6'}/>
                </XStack>
                <H3>Input variants</H3>
                <YStack {...defaultSectionProps}>
                    <XStack {...defaultSectionProps}>
                        <LmInput size={'$4'} colorVariant={'primary'}/>
                        <LmInput size={'$4'} colorVariant={'secondary'}/>
                        <LmInput size={'$4'} colorVariant={'success'}/>
                    </XStack>
                    <XStack {...defaultSectionProps}>
                        <LmInput size={'$4'} colorVariant={'error'}/>
                        <LmInput size={'$4'} colorVariant={'warning'}/>
                        <LmInput size={'$4'} colorVariant={'info'}/>
                    </XStack>
                </YStack>

                <H3>Input multiline (TextArea)</H3>
                <XStack {...defaultSectionProps}>
                    <LmInput size={'$4'} colorVariant={'primary'} multiline/>
                    <LmInput size={'$4'} colorVariant={'secondary'} multiline/>
                </XStack>
                <H3>Input label / placeholder / value</H3>
                <XStack {...defaultSectionProps}>
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
                <H3>Avatar Sizes</H3>
                <H4>round</H4>
                <XStack {...defaultSectionProps}>
                    <LmAvatar size={'$2'} src={'https://placekitten.com/400/300'}/>
                    <LmAvatar size={'$4'} src={'https://placekitten.com/400/300'}/>
                    <LmAvatar size={'$6'} src={'https://placekitten.com/400/300'}/>
                    <LmAvatar size={'$8'} src={'https://placekitten.com/400/300'}/>
                </XStack>
                <H4>square</H4>
                <XStack {...defaultSectionProps}>
                    <LmAvatar circular={false} size={'$2'} src={'https://placekitten.com/400/300'} />
                    <LmAvatar circular={false} size={'$4'} src={'https://placekitten.com/400/300'}/>
                    <LmAvatar circular={false} size={'$6'} src={'https://placekitten.com/400/300'}/>
                    <LmAvatar circular={false} size={'$8'} src={'https://placekitten.com/400/300'}/>
                </XStack>
            </YStack>
        </ScrollView>
    )
}
