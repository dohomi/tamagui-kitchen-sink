import {
    SpaceTokens,
    Separator,
    YStack
} from '@my/ui'
import { LmDsSelect } from '@my/ui/src/components/forms/LmDsSelect'
import React, {useState} from 'react'
import {LmMultiSelect} from "@my/ui/src";

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

    const options = [
        { value: '1', label: 'Chocolate' },
        { value: '2', label: 'Strawberry' },
        { value: '3', label: 'Vanilla' },
    ]

    return (
        <YStack flex={1}
                justifyContent="flex-start"
                alignItems="flex-start"
                padding="$4"
                space
                maxWidth={'100%'}>
            <YStack {...defaultSectionProps}>
                <LmDsSelect items={['', 'Apple', 'Pear', 'Blackberry', 'Peach', 'Orange']}/>
                <Separator marginVertical={'$2'}/>
                <LmDsSelect items={['', 'Apple', 'Pear', 'Blackberry', 'Peach', 'Orange']}/>
                <Separator marginVertical={'$2'}/>
                <LmMultiSelect options={options}/>
                <Separator marginVertical={'$2'}/>
                <LmMultiSelect isMulti={true} options={options}/>
                {/*<LmSelect options={items} colorVariant={'primary'}/>
                        <LmSelect options={items} colorVariant={'secondary'}/>*/}

                {/*<Select id="foodFirst" sheetBreakpoint="sm" value={val} onValueChange={setVal} key={'main1'}>
                            <Select.Trigger width={240} iconAfter={ChevronDown} id={'select1'}>
                                <Select.Value placeholder="Something" key={'sv1'}/>
                            </Select.Trigger>

                            <Select.Sheet modal dismissOnSnapToBottom key={'s1'}>
                                <Select.Sheet.Frame>
                                    <Select.Sheet.ScrollView>
                                        <Select.SheetContents />
                                    </Select.Sheet.ScrollView>
                                </Select.Sheet.Frame>
                                <Select.Sheet.Overlay />
                            </Select.Sheet>

                            <Select.Content key={'content1'}>
                                <Select.Viewport minWidth={200} key={'vp1'} id={'vp1id'}>
                                    <Select.Group key={'sg1'}>
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
                            </Select.Content>
                        </Select>
                        <Select id="foodSecond" sheetBreakpoint="sm" value={val2} onValueChange={setVal2} key={'main2'}>
                            <Select.Trigger width={240} iconAfter={ChevronDown} id={'select2'}>
                                <Select.Value placeholder="Something" key={'sv2'}/>
                            </Select.Trigger>

                            <Select.Sheet modal dismissOnSnapToBottom key={'s2'}>
                                <Select.Sheet.Frame>
                                    <Select.Sheet.ScrollView>
                                        <Select.SheetContents />
                                    </Select.Sheet.ScrollView>
                                </Select.Sheet.Frame>
                                <Select.Sheet.Overlay />
                            </Select.Sheet>

                            <Select.Content key={'content2'}>
                                <Select.Viewport minWidth={200} key={'vp2'} id={'vp2id'}>
                                    <Select.Group key={'sg2'}>
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
                            </Select.Content>
                        </Select>*/}
            </YStack>
        </YStack>
    )
}
