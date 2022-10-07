import {ResizeMode, Video, VideoProps} from 'expo-av';
import {createRef} from "react";

export type LmVideo = VideoProps & {
    ratio?: number // like 16/9
}

export function LmVideo({ratio = 16 / 9, resizeMode = ResizeMode.CONTAIN, ...props}: LmVideo) {
    const videoRef = createRef<Video>()
    return (
        <Video
            {...props}
            style={{
                width: '100%', // currently not working well..
                aspectRatio: ratio,
                // @ts-ignore
                ...props?.style
            }}
            // videoStyle={{
            //
            // }} // todo: waiting for new expo-av release to get videoStyle released
            ref={videoRef}
            useNativeControls={true}
            resizeMode={resizeMode}
            isLooping={props.isLooping}
        />
    )
}