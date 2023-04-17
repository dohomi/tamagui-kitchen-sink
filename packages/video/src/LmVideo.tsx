import {LmVideoProps} from "./videoTypes";
import {Stack} from "tamagui";

export function LmVideo({
                            aspectRatio = 16 / 9,
                            resizeMode,
                            src,
                            isLooping,
                            useNativeControls = true,
                            posterSource,
                            autoplay,
                            width,
                            height
                        }: LmVideoProps) {
    return (
        <Stack aspectRatio={aspectRatio} width={width} height={height}>
            <video width={'100%'} height={'100%'} loop={isLooping} autoPlay={autoplay} controls={useNativeControls}
                   style={{
                       aspectRatio: resizeMode
                   }}>
                <source src={src}/>
            </video>
        </Stack>
    )
}