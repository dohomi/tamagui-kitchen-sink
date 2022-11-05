import {ImageSourcePropType} from "react-native";
import {ResizeMode} from "expo-av";
import {SizableStackProps, StackPropsBase} from "tamagui";

export type LmVideoProps = Pick<StackPropsBase, 'width' | 'height' | 'aspectRatio'> & {
    src: string
    containerProps?: SizableStackProps
    posterSource?: ImageSourcePropType
    isLooping?: boolean
    resizeMode?: ResizeMode
    useNativeControls?: boolean
    autoplay?: boolean
}