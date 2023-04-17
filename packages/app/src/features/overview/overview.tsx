import React from 'react'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Separator,
  SizableText,
  SpaceTokens,
  useTheme,
  XGroup,
  XStack,
  YGroup,
  YStack,
} from 'tamagui'
import { Star } from 'tamagui-phosphor-icons'
import { fruitItemsFixtures } from 'app/src/lib/fixtures/selectItems'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { LmAvatar, LmButton } from '@tamagui-extras/core'
import { LmInput, LmSelect } from '@tamagui-extras/form'

export function OverviewScreen() {
  const {} = useTheme()

  const defaultSectionProps: {
    space?: SpaceTokens | null
    flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'
  } = {
    space: '$4',
    flexWrap: 'wrap',
  }
  const items = fruitItemsFixtures

  return (
    <LmAppShell title={'Overview'}>
      <YStack
        flex={1}
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="$4"
        space
        maxWidth={'100%'}
      >
        <XStack {...defaultSectionProps}>
          <YStack>
            <H3>Headings</H3>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>

            <H3>Sizeable Text</H3>
            <SizableText theme="alt1" size="$2">
              Size 2
            </SizableText>
            <SizableText theme="alt1" size="$4">
              Size 4
            </SizableText>
            <SizableText theme="alt1" size="$6">
              Size 6
            </SizableText>
            <SizableText theme="alt1" size="$8">
              Size 8
            </SizableText>
          </YStack>
        </XStack>
        <XStack {...defaultSectionProps}>
          <Paragraph maxWidth={200} size={'$2'}>
            Paragraph, maxWidth 200 and size $2
          </Paragraph>
          <Paragraph maxWidth={200} size={'$4'} backgroundColor={'$green2'}>
            Paragraph, maxWidth 200 and size $2, backgroundColor $green2
          </Paragraph>
        </XStack>
        <H3>Button Sizes</H3>
        <XStack {...defaultSectionProps}>
          <LmButton size={'$2'} theme={'yellow'}>
            size 2
          </LmButton>
          <LmButton size={'$4'} theme={'yellow'}>
            size 4
          </LmButton>
          <LmButton size={'$6'} theme={'yellow'}>
            size 6
          </LmButton>
          <LmButton size={'$8'} theme={'yellow'}>
            size 8
          </LmButton>
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
            <LmButton theme={'gray_alt2'}>dark gray alt</LmButton>
          </XStack>
        </YStack>
        <H3>Buttons Loading</H3>
        <YStack {...defaultSectionProps}>
          <XStack {...defaultSectionProps}>
            <LmButton size={'$2'} loading>
              size 2
            </LmButton>
            <LmButton size={'$4'} loading>
              size 4
            </LmButton>
            <LmButton size={'$6'} loading>
              size 6
            </LmButton>
          </XStack>
          <XStack {...defaultSectionProps}>
            <LmButton size={'$2'} loading colorVariant={'primary'}>
              size 2
            </LmButton>
            <LmButton size={'$4'} loading colorVariant={'secondary'}>
              size 4
            </LmButton>
            <LmButton size={'$6'} loading theme={'pink'}>
              size 6
            </LmButton>
          </XStack>
        </YStack>
        <H3>Buttons With Icons</H3>
        <YStack space={'$4'}>
          <XStack {...defaultSectionProps}>
            <LmButton size={'$2'} icon={<Star />}>
              size 2
            </LmButton>
            <LmButton size={'$4'} icon={<Star />}>
              size 4
            </LmButton>
            <LmButton size={'$6'} icon={<Star />}>
              size 6
            </LmButton>
          </XStack>
          <XStack {...defaultSectionProps}>
            <LmButton size={'$2'} iconAfter={<Star />} colorVariant={'primary'}>
              size 2
            </LmButton>
            <LmButton size={'$4'} iconAfter={<Star />} colorVariant={'secondary'}>
              size 4
            </LmButton>
            <LmButton size={'$6'} iconAfter={<Star />} colorVariant={'success'}>
              size 6
            </LmButton>
          </XStack>
          <XStack
            {...defaultSectionProps}
            space
            alignItems={'center'}
            paddingHorizontal={'$2'}
            justifyContent={'space-between'}
          >
            <LmButton size={'$2'} icon={<Star />} circular />
            <LmButton size={'$4'} icon={<Star />} circular />
            <LmButton size={'$6'} icon={<Star />} circular />
          </XStack>
        </YStack>

        <H3>Buttons Groups</H3>
        <YStack {...defaultSectionProps}>
          <XGroup>
            <XGroup.Item>
              <LmButton icon={<Star />}>size 2</LmButton>
            </XGroup.Item>
            <XGroup.Item>
              <LmButton icon={<Star />}>size 4</LmButton>
            </XGroup.Item>
          </XGroup>
          <YGroup>
            <LmButton iconAfter={<Star />} colorVariant={'primary'}>
              size 2
            </LmButton>
            <LmButton iconAfter={<Star />} colorVariant={'secondary'}>
              size 4
            </LmButton>
          </YGroup>
        </YStack>

        <H3>Input sizes</H3>
        <XStack {...defaultSectionProps}>
          <LmInput id="1" size={'$2'} />
          <LmInput id="2" size={'$4'} />
          <LmInput id="3" size={'$6'} />
        </XStack>
        <H3>Input variants</H3>
        <YStack {...defaultSectionProps}>
          <XStack {...defaultSectionProps}>
            <LmInput id="4" size={'$4'} />
            <LmInput id="5" size={'$4'} />
            <LmInput id="6" size={'$4'} />
          </XStack>
          <XStack {...defaultSectionProps}>
            <LmInput id="7" size={'$4'} />
            <LmInput id="8" size={'$4'} />
            <LmInput id="9" size={'$4'} />
          </XStack>
        </YStack>

        <H3>Input multiline (TextArea)</H3>
        <XStack {...defaultSectionProps}>
          <LmInput id="10" size={'$4'} multiline />
          <LmInput id="11" size={'$4'} multiline />
        </XStack>
        <Separator marginVertical={20} />
        <H3>Input label / placeholder / value</H3>
        <XStack {...defaultSectionProps}>
          <LmInput id="12" size={'$4'} defaultValue={'With default value'} />
          <LmInput id="13" size={'$4'} placeholder={'With placeholder text'} />
        </XStack>
        <XStack>
          <LmInput id="14" size={'$4'} placeholder={'With label text'} label={'Label Text'} />
        </XStack>
        <YStack>
          <LmInput
            id="15"
            size={'$4'}
            placeholder={'With label text, YStack'}
            label={'Label Text'}
          />
        </YStack>
        <XStack>
          <H3>Input label / placeholder / value</H3>
        </XStack>
        <XStack space={'$4'} flexDirection={'column'} flexWrap={'wrap'}>
          <LmInput id="16" size={'$4'} defaultValue={'With default value'} />
          <LmInput id="17" size={'$4'} placeholder={'With placeholder text'} />
        </XStack>
        <XStack>
          <LmInput id="18" size={'$4'} placeholder={'With label text'} label={'Label Text'} />
        </XStack>
        <YStack>
          <LmInput
            id="19"
            size={'$4'}
            placeholder={'With label text, YStack'}
            label={'Label Text'}
          />
        </YStack>
        <H3>Single Select</H3>
        <H4>Variants</H4>
        <YStack {...defaultSectionProps}>
          <XStack {...defaultSectionProps}>
            <LmSelect options={items} colorVariant={'primary'} />
            <LmSelect options={items} colorVariant={'secondary'} />
            <LmSelect options={items} colorVariant={'success'} />
          </XStack>
          <XStack {...defaultSectionProps}>
            <LmSelect options={items} colorVariant={'info'} />
            <LmSelect options={items} colorVariant={'warning'} />
            <LmSelect options={items} colorVariant={'error'} />
            <LmSelect options={items} themeName={'gray'} />
          </XStack>
        </YStack>
        <H4>Themes</H4>
        <XStack {...defaultSectionProps}>
          <LmSelect options={items} themeName={'blue_alt2'} />
          <LmSelect options={items} themeName={'yellow_alt1'} />
          <LmSelect options={items} themeName={'gray'} />
        </XStack>
        <H4>Sizes</H4>
        <XStack {...defaultSectionProps}>
          <LmSelect options={items} colorVariant={'info'} size={'$2'} />
          <LmSelect options={items} colorVariant={'info'} size={'$4'} />
          <LmSelect options={items} colorVariant={'info'} size={'$6'} />
        </XStack>
        <H4>Width</H4>
        <XStack {...defaultSectionProps}>
          <LmSelect options={items} colorVariant={'info'} width={150} />
          <LmSelect options={items} colorVariant={'info'} />
          <LmSelect options={items} colorVariant={'info'} width={300} />
        </XStack>

        <H3>Avatar Sizes</H3>
        <H4>round</H4>
        <XStack {...defaultSectionProps}>
          <LmAvatar size={'$2'} src={'https://placekitten.com/400/300'} width={400} height={300} />
          <LmAvatar size={'$4'} src={'https://placekitten.com/400/300'} />
          <LmAvatar size={'$6'} src={'https://placekitten.com/400/300'} />
          <LmAvatar size={'$8'} src={'https://placekitten.com/400/300'} />
        </XStack>
        <H4>square</H4>
        <XStack {...defaultSectionProps}>
          <LmAvatar circular={false} size={'$2'} src={'https://placekitten.com/400/300'} />
          <LmAvatar circular={false} size={'$4'} src={'https://placekitten.com/400/300'} />
          <LmAvatar circular={false} size={'$6'} src={'https://placekitten.com/400/300'} />
          <LmAvatar circular={false} size={'$8'} src={'https://placekitten.com/400/300'} />
        </XStack>
      </YStack>
    </LmAppShell>
  )
}
