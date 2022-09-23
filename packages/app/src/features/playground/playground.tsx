import {LmSelect, Separator, SpaceTokens, YStack} from '@my/ui'
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
        {value: '1', label: 'Chocolate'},
        {value: '2', label: 'Strawberry'},
        {value: '3', label: 'Vanilla'},
    ]

    return (
        <YStack flex={1}
                justifyContent="flex-start"
                alignItems="flex-start"
                padding="$4"
                space
                maxWidth={'100%'}>
            <YStack {...defaultSectionProps} width={'100%'}>
                <LmMultiSelect
                    zIndex={3000}
                    zIndexInverse={1000}
                    onChange={(value) => console.log('!!', value) }
                    options={options} placeholder={'Single select'}/>
                <LmMultiSelect
                    zIndex={2999}
                    zIndexInverse={1001}
                    options={options} isSearchable={true} placeholder={'Single searchable select'}/>
                <Separator marginVertical={'$2'} width={'100%'}/>
                <LmMultiSelect
                    zIndex={2998}
                    zIndexInverse={1002}
                    onChange={(value) => console.log('!!', value) }
                    isMulti={true} options={options} placeholder={'Multi select'}/>
                <LmMultiSelect
                    zIndex={2997}
                    zIndexInverse={1003}
                    isMulti={true} options={options} placeholder={'Multi select disabled'}
                                  isDisabled={true}/>
                <LmSelect options={options} colorVariant={'primary'}/>
                <LmSelect options={options} colorVariant={'secondary'}/>

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
