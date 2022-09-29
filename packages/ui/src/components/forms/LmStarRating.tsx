import {Button, ButtonProps, XStack} from "tamagui";
import {useState} from "react";
import {Star} from "@tamagui-extras/mdi-icons"

type StarProps = ButtonProps & {
    filled: boolean
}

function StarIcon({filled, ...props}: StarProps) {
    console.log(filled)
    return (
        <Button
            {...props}
            chromeless
            circular
            icon={<Star color={'red'}/>}
            color={filled ? '' : ''}
        />
    )
}

type LmStarRatingProps = {
    count?: number
}

export function LmStarRating({count = 5}: LmStarRatingProps) {
    const [rating, setRating] = useState<number>(0);
    const arr = Array.from(Array(count).keys())
    console.log(rating, arr)
    return (
        <XStack>
            {arr.map(value => (
                <StarIcon key={value + 1} filled={value + 1 <= rating}
                          onPress={() => {
                              setRating(value + 1)
                          }}/>
            ))}
        </XStack>
    )
}