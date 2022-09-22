import {ColorTokens, Slider, SliderProps, SliderThumbProps, Text, XStack} from "tamagui";
import {useState} from "react";

export type LmSliderProps = SliderProps & {
    defaultValue: number[]
    color?: ColorTokens | string
    thumbProps?: SliderThumbProps
}

export function LmSlider({thumbProps, color, defaultValue = [0], ...sliderProps}: LmSliderProps) {
    const [value, setValue] = useState<number[]>(defaultValue)
    return (
        <XStack space alignItems={'center'}>
            <Slider size="$2" width={150} defaultValue={value} max={5} step={1} {...sliderProps}
                    onValueChange={setValue}>
                <Slider.Track>
                    <Slider.TrackActive backgroundColor={color ? `${color}Dark` : undefined}/>
                </Slider.Track>
                <Slider.Thumb circular size={'$2'} index={0} backgroundColor={color} {...thumbProps}/>
            </Slider>
            <Text>{value[0]}</Text>
        </XStack>
    )
}