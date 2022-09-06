import {Image, ImageProps} from "tamagui";

export type LmImageProps = ImageProps

export function LmImage(props: LmImageProps) {
    return (
        <Image {...props}/>
    )
}