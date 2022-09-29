import {ColorTokens, Slider, SliderProps, SliderThumbProps, Text, XStack} from "tamagui";
import {useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {LmFormContainerBaseTypes} from "./formContainerTypes";

export type LmSliderProps = SliderProps & LmFormContainerBaseTypes & {
    defaultValue?: number[]
    color?: ColorTokens | string
    colorActiveOnly?: boolean
    thumbProps?: SliderThumbProps
}

export function LmSlider({
                             thumbProps,
                             color,
                             defaultValue = [0],
                             label,
                             labelProps,
                             error,
                             required,
                             helperText,
                             labelInline,
                             colorActiveOnly,
                             ...sliderProps
                         }: LmSliderProps) {
    const id = useId()
    const [value, setValue] = useState<number[]>(defaultValue)
    const trackColor = color ? `${color}Dark` : undefined;
    return (
        <LmFormFieldContainer id={id}
                              label={label}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              size={sliderProps.size}
                              labelInline={labelInline}
                              helperText={helperText}
                              alignItems={labelInline ? 'center' : undefined}
        >
            <XStack space alignItems={'center'}>
                <Slider size="$2" width={150} defaultValue={value} max={5} step={1} {...sliderProps}
                        onValueChange={v => {
                            setValue(v)
                            if (typeof sliderProps.onValueChange === 'function') {
                                sliderProps.onValueChange(v)
                            }
                        }}>
                    <Slider.Track backgroundColor={!colorActiveOnly ? trackColor : undefined}>
                        <Slider.TrackActive backgroundColor={trackColor}/>
                    </Slider.Track>
                    <Slider.Thumb circular size={'$2'} index={0} backgroundColor={color} {...thumbProps}/>
                </Slider>
                <Text>{value[0]}</Text>
            </XStack>
        </LmFormFieldContainer>
    )
}