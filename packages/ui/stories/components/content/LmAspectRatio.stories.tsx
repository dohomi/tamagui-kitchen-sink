import {LmAspectRatio} from "../../../src/components/content/LmAspectRatio";
import {Card, H2, Stack, XStack, YStack} from "tamagui";
import {H3, Paragraph} from "tamagui-extras";
import {LmImage, LmVideo, LmVideoEmbed} from "../../../src";

export default {
    title: 'ui/Content/Aspect Ratio',
}


export const RatioStack = () => (
    <Stack backgroundColor={'red'} aspectRatio={16 / 9} width={200}></Stack>
)

const CustomCard = () => (
    <Card elevate bordered aspectRatio={16 / 9} width={250} marginBottom={'$4'}>
        <Card.Header padded>
            <H2>16/9 cards </H2>
            <Paragraph>Fixed 250 width</Paragraph>
        </Card.Header>
        <Card.Background aspectRatio={16 / 9}>
            <LmAspectRatio/>
        </Card.Background>
    </Card>
)

export const CardsFixedWidth = () => (
    <XStack space={'$4'} flexWrap={'wrap'}>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
    </XStack>
)

export const ImageAspectRatio = () => (
    <YStack width={300} backgroundColor={'$green5'} height={600}>
        <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
        <LmImage width={'100%'} height={'100%'} src={'https://placekitten.com/400/300'} aspectRatio={4 / 3}/>
    </YStack>
)

export const VideoAspectRatio = () => (
    <YStack width={300} backgroundColor={'$green5'} height={600}>
        <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
        <LmVideo source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}} ratio={4 / 3}/>
        <Paragraph>waiting for new expo-av release...</Paragraph>
    </YStack>
)

export const YoutubeEmbedRatio = () => (
    <YStack width={300} backgroundColor={'$green5'} height={600} space>
        <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
        <LmVideoEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={4 / 3}/>
        <LmVideoEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={2 / 3}/>
    </YStack>
)