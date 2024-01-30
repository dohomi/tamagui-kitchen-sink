import { LmCard, LmCardProps } from '../../../../../core/src'
import { Meta } from '@storybook/react'
import { Button, Card, H2, Paragraph, styled, ThemeableStack, XStack, YStack } from 'tamagui'
import { Profiler } from 'react'

export default {
  title: 'core/Content/Card',
  component: LmCard,
} as Meta<typeof LmCard>

export const Basic = {
  args: {
    title: 'Hello World',
    subTitle: 'how are you',
    width: 300,
    height: 500,
    elevate: true,
    elevation: '$4',
    image: {
      width: 300,
      height: 500,
      src: 'https://placekitten.com/300/500',
    },
  } as LmCardProps,
}

export const Bouncy = {
  args: {
    title: 'Hello World',
    subTitle: 'how are you',
    bouncy: true,
  },
}

const handleRender = (id, phase, actualDuration) => {
  console.log(`The ${id} interaction took ` + `${actualDuration}ms to render (${phase})`)
  // Would log “The ComposeButton interaction
  // took 25.2999999970197678ms to render (update)”
}

const arrayOf100 = Array.from(Array(100).keys())
const CardContainer = styled(ThemeableStack, {})
const CardHeader = styled(ThemeableStack, {})

export const CardListTest = () => {
  return (
    <>
      <Profiler id={'Render Tamagui Card list'} onRender={handleRender}>
        <>
          {arrayOf100.map((i) => (
            <Card elevate size="$4" bordered width={250} height={300} key={i}>
              <Card.Header padded>
                <H2>Sony A7IV</H2>
                <Paragraph theme="alt2">Now available</Paragraph>
              </Card.Header>
              <Card.Footer padded>
                <XStack flex={1} />
                <Button borderRadius="$10">Purchase</Button>
              </Card.Footer>
              <Card.Background></Card.Background>
            </Card>
          ))}
        </>
      </Profiler>
      <Profiler id={'Render Themeable stack with content'} onRender={handleRender}>
        <>
          {arrayOf100.map((i) => (
            <CardContainer elevate bordered width={250} height={300} key={i}>
              <CardHeader padded>
                <H2>Sony A7IV</H2>
                <Paragraph theme="alt2">Now available</Paragraph>
              </CardHeader>
              <YStack>
                <XStack flex={1} />
                <Button borderRadius="$10">Purchase</Button>
              </YStack>
            </CardContainer>
          ))}
        </>
      </Profiler>
      <Profiler id={'Render YStack with Button'} onRender={handleRender}>
        <>
          {arrayOf100.map((i) => (
            <YStack width={250} height={300} key={i}>
              <Button>Purchase</Button>
            </YStack>
          ))}
        </>
      </Profiler>
    </>
  )
}

export const YstackList = {
  render: () => {
    return (
      <Profiler id={'Render YStack with Button'} onRender={handleRender}>
        {arrayOf100.map((i) => (
          <YStack width={250} height={300} key={i}>
            <Button>Purchase</Button>
          </YStack>
        ))}
      </Profiler>
    )
  },
}
