//import {Video} from 'expo-av';
//import {createRef} from "react";
import {LmVideoProps} from "./videoTypes";


export function LmVideo({
                            aspectRatio = 16 / 9,
                            src,
                            posterSource,
                            isLooping,
                            resizeMode,
                            autoplay,
                            useNativeControls = true
                        }: LmVideoProps) {
                            return null
    // @TODO - Video breaks expo
    // const videoRef = createRef<Video>()
    // return (
    //     <Video
    //         source={{
    //             uri: src
    //         }}
    //         posterSource={posterSource}
    //         style={{
    //             width: '100%', // currently not working well..
    //             aspectRatio,
    //             // @ts-ignore
    //             ...props?.style
    //         }}
    //         shouldPlay={autoplay}
    //         // videoStyle={{
    //         //
    //         // }} // todo: waiting for new expo-av release to get videoStyle released
    //         ref={videoRef}
    //         useNativeControls={useNativeControls}
    //         resizeMode={resizeMode}
    //         isLooping={isLooping}
    //     />
    // )
}