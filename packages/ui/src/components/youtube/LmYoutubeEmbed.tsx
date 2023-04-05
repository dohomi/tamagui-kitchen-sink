import {LmYoutubeEmbedProps} from "./videoEmbedTypes";
import {Stack} from "tamagui";
import {useState} from "react";
import {LmSkeleton} from "../core/content";


export function LmYoutubeEmbed({
                                 youtubeId = 'JxS5E-kZc2s',
                                 aspectRatio = 16 / 9,
                                 width = '100%',
                                 ...stackProps
                             }: LmYoutubeEmbedProps) {
    const [loaded, setLoaded] = useState(false)
    return (
        <Stack {...stackProps} width={width} aspectRatio={aspectRatio} position={'relative'}>
            {!loaded && (
                <LmSkeleton/>
            )}
            <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=1`}
                    frameBorder="0"
                    width={'100%'}
                    height={'100%'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setLoaded(true)}
            />
        </Stack>
    )
}