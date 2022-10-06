import {ResizeMode, Video, VideoProps} from 'expo-av';
import {createRef} from "react";
import {View} from "react-native";

export type LmVideo = VideoProps & {
    height?: number,
    ratio?: number // like 16/9
}

export function LmVideo({height = 350, ratio = 16 / 9, resizeMode = ResizeMode.CONTAIN, ...props}: LmVideo) {
    const videoRef = createRef<Video>()
    return (
        <View>
            <Video
                style={{
                    width: height * ratio, // currently not working well..
                    height: height,
                    // @ts-ignore
                    ...props?.style
                }}
                {...props}
                ref={videoRef}
                useNativeControls={true}
                resizeMode={resizeMode}
                isLooping={props.isLooping}
            />
        </View>
    )
}