import {LmVideoEmbedProps} from "./videoEmbedTypes";
import {Stack} from "tamagui";


export function LmVideoEmbed({youtubeId = 'JxS5E-kZc2s', height = 250, ratio = 16 / 9}: LmVideoEmbedProps) {
    return (
        <Stack height={height} width={height * ratio}>
            <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=1`}
                    frameBorder="0"
                    width={'100%'}
                    height={'100%'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </Stack>
    )
}