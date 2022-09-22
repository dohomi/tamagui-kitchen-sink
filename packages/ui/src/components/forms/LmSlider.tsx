import {ColorTokens, Slider, SliderProps, SliderThumbProps, Text, XStack} from "tamagui";
import {useState} from "react";

export type LmSliderProps = SliderProps & {
    defaultValue?: number[]
    color?: ColorTokens | string
    colorActiveOnly?: boolean
    thumbProps?: SliderThumbProps
}

export function LmSlider({thumbProps, color, defaultValue = [0], colorActiveOnly, ...sliderProps}: LmSliderProps) {
    const [value, setValue] = useState<number[]>(defaultValue)
    const trackColor = color ? `${color}Dark` : undefined;
    return (
        <XStack space alignItems={'center'}>
            <Slider size="$2" width={150} defaultValue={value} max={5} step={1} {...sliderProps}
                    onValueChange={setValue}>
                <Slider.Track backgroundColor={!colorActiveOnly ? trackColor : undefined}>
                    <Slider.TrackActive backgroundColor={trackColor}/>
                </Slider.Track>
                <Slider.Thumb circular size={'$2'} index={0} backgroundColor={color} {...thumbProps}/>
            </Slider>
            <Text>{value[0]}</Text>
        </XStack>
    )
}