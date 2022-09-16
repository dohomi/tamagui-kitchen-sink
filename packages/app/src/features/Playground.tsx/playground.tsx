import {
    LinearGradient,
    LmSelect,
    Select,
    SpaceTokens,
    XStack,
    YStack
} from '@my/ui'
import React, {useState} from 'react'
import {View} from "react-native";
import {fruitItemsFixtures} from "@my/ui/fixtures/selectItems";
import {Check, ChevronDown, ChevronUp } from '@tamagui/feather-icons';

export function PlaygroundScreen() {

    const [val, setVal] = useState('apple')
    const [val2, setVal2] = useState('pear')

    const defaultSectionProps: {
        space?: SpaceTokens | null
        flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'
    } = {
        space: '$4',
        flexWrap: 'wrap'
    }
   // const items = fruitItemsFixtures

    const items = [
        { name: 'Apple' },
        { name: 'Pear' },
        { name: 'Blackberry' },
        { name: 'Peach' },
        { name: 'Apricot' },
        { name: 'Melon' },
        { name: 'Honeydew' },
        { name: 'Starfruit' },
        { name: 'Blueberry' },
        { name: 'Rasberry' },
        { name: 'Strawberry' },
        { name: 'Mango' },
        { name: 'Pineapple' },
        { name: 'Lime' },
        { name: 'Lemon' },
        { name: 'Coconut' },
        { name: 'Guava' },
        { name: 'Papaya' },
        { name: 'Orange' },
        { name: 'Grape' },
        { name: 'Jackfruit' },
        { name: 'Durian' },
    ]

    return (
        <View>
            <YStack flex={1}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    padding="$4"
                    space
                    maxWidth={'100%'}>
                <YStack {...defaultSectionProps}>
                    <XStack {...defaultSectionProps}>
                        {/*<LmSelect options={items} colorVariant={'primary'}/>
                        <LmSelect options={items} colorVariant={'secondary'}/>*/}
                        <Select id="foodFirst" sheetBreakpoint="sm" value={val} onValueChange={setVal}>
                            <Select.Trigger width={240} iconAfter={ChevronDown}>
                                <Select.Value placeholder="Something" />
                            </Select.Trigger>

                            <Select.Sheet modal dismissOnSnapToBottom>
                                <Select.Sheet.Frame>
                                    <Select.Sheet.ScrollView>
                                        <Select.SheetContents />
                                    </Select.Sheet.ScrollView>
                                </Select.Sheet.Frame>
                                <Select.Sheet.Overlay />
                            </Select.Sheet>

                            <Select.Content>
                                <Select.ScrollUpButton alignItems="center" justifyContent="center" position="relative" width="100%" height="$3">
                                    <YStack zIndex={10}>
                                        <ChevronUp size={20} />
                                    </YStack>
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[0, 1]}
                                        fullscreen
                                        colors={['$background', '$backgroundTransparent']}
                                        borderRadius="$4"
                                    />
                                </Select.ScrollUpButton>

                                <Select.Viewport minWidth={200}>
                                    <Select.Group>
                                        <Select.Label>Fruits</Select.Label>
                                        {items.map((item, i) => {
                                            return (
                                                <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                                                    <Select.ItemText>{item.name}</Select.ItemText>
                                                    <Select.ItemIndicator marginLeft="auto">
                                                        <Check size={16} />
                                                    </Select.ItemIndicator>
                                                </Select.Item>
                                            )
                                        })}
                                    </Select.Group>
                                </Select.Viewport>

                                <Select.ScrollDownButton alignItems="center" justifyContent="center" position="relative" width="100%" height="$3">
                                    <YStack zIndex={10}>
                                        <ChevronDown size={20} />
                                    </YStack>
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[0, 1]}
                                        fullscreen
                                        colors={['$backgroundTransparent', '$background']}
                                        borderRadius="$4"
                                    />
                                </Select.ScrollDownButton>
                            </Select.Content>
                        </Select>
                        <Select id="foodSecond" sheetBreakpoint="sm" value={val2} onValueChange={setVal2}>
                            <Select.Trigger width={240} iconAfter={ChevronDown}>
                                <Select.Value placeholder="Something" />
                            </Select.Trigger>

                            <Select.Sheet modal dismissOnSnapToBottom>
                                <Select.Sheet.Frame>
                                    <Select.Sheet.ScrollView>
                                        <Select.SheetContents />
                                    </Select.Sheet.ScrollView>
                                </Select.Sheet.Frame>
                                <Select.Sheet.Overlay />
                            </Select.Sheet>

                            <Select.Content>
                                <Select.ScrollUpButton alignItems="center" justifyContent="center" position="relative" width="100%" height="$3">
                                    <YStack zIndex={10}>
                                        <ChevronUp size={20} />
                                    </YStack>
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[0, 1]}
                                        fullscreen
                                        colors={['$background', '$backgroundTransparent']}
                                        borderRadius="$4"
                                    />
                                </Select.ScrollUpButton>

                                <Select.Viewport minWidth={200}>
                                    <Select.Group>
                                        <Select.Label>Fruits</Select.Label>
                                        {items.map((item, i) => {
                                            return (
                                                <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                                                    <Select.ItemText>{item.name}</Select.ItemText>
                                                    <Select.ItemIndicator marginLeft="auto">
                                                        <Check size={16} />
                                                    </Select.ItemIndicator>
                                                </Select.Item>
                                            )
                                        })}
                                    </Select.Group>
                                </Select.Viewport>

                                <Select.ScrollDownButton alignItems="center" justifyContent="center" position="relative" width="100%" height="$3">
                                    <YStack zIndex={10}>
                                        <ChevronDown size={20} />
                                    </YStack>
                                    <LinearGradient
                                        start={[0, 0]}
                                        end={[0, 1]}
                                        fullscreen
                                        colors={['$backgroundTransparent', '$background']}
                                        borderRadius="$4"
                                    />
                                </Select.ScrollDownButton>
                            </Select.Content>
                        </Select>
                    </XStack>
                </YStack>
            </YStack>
        </View>
    )
}
