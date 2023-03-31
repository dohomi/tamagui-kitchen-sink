import { Anchor, H1, H3, H5, Paragraph, YStack } from 'tamagui-extras'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Installation',
}

export default meta

export const Installation: StoryObj = {
  render: () => (
    <YStack width={'100%'} space>
      <H1 textAlign={'center'}>Welcome to tamagui-extras</H1>
      <Paragraph maxWidth={600} textAlign={'center'} alignSelf={'center'}>
        This is a package which adds missing components from the core package of{' '}
        <Anchor href={'https://tamagui.dev'} target={'_blank'} rel="noreferrer">
          {' '}
          Tamagui
        </Anchor>
        . As the project is in early phase please be assure that it can contain bugs and unexpected
        behaviour.
      </Paragraph>

      <Paragraph paddingRight={'$3'}>
        The main focus are form components with an easy integration of `react-hook-form`. The repo
        also tries to showcase best practices and give developers guidance on how to use Tamagui and
        the underlying eco-system.
      </Paragraph>
      <H3>Installation</H3>
      <Paragraph>
        First follow the{' '}
        <Anchor href={'https://tamagui.dev/docs/intro/installation'} target={'_blank'}>
          tamagui installation
        </Anchor>
        . After that add tamagui-extras:
      </Paragraph>
      <code># yarn install tamagui-extras</code>
      <Paragraph paddingRight={'$3'}>
        All components of this library are prefixed with a `Lm[ComponentName]`. To be more flexible
        and due to frequent changes of tamagui you have to install it along tamagui-extras.
      </Paragraph>
      <H5>Links</H5>
      <ul>
        <li>
          <Anchor
            href={'https://github.com/dohomi/tamagui-kitchen-sink/issues'}
            target={'_blank'}
            rel="noreferrer"
          >
            Issues tamagui-extras
          </Anchor>
        </li>
        <br />
        <li>
          <Anchor
            href={'https://www.npmjs.com/package/tamagui-extras'}
            target={'_blank'}
            rel="noreferrer"
          >
            NPM tamagui-extras
          </Anchor>
        </li>
        <br />
        <li>
          <Anchor href={'https://tamagui.dev'} target={'_blank'} rel="noreferrer">
            Main Website Tamagui
          </Anchor>
        </li>
        <br />
        <li>
          <Anchor href={'https://github.com/tamagui/tamagui'} target={'_blank'} rel="noreferrer">
            Github Tamagui
          </Anchor>
        </li>
        <br />
        <li>
          <Anchor href={'https://discord.gg/pEjS3u3X'} target={'_blank'} rel="noreferrer">
            Discord Community
          </Anchor>
        </li>
      </ul>
    </YStack>
  ),
}
