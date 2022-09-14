import {View} from "react-native";
import {AllExercisesQuery} from "app/src/utils/__generated__/graphql";
import {LmLinkButton} from "@my/ui";

type ExerciseListCardsProps = {
    exercises: AllExercisesQuery['exercise']
}

export function ExerciseListCards({exercises}: ExerciseListCardsProps) {
    return (
        <View>
            {exercises.map(ex => (
                <View key={ex.id}>
                    <LmLinkButton link={{href: `/exercise/${ex.id}`}}>{ex.title}</LmLinkButton>
                    <LmLinkButton link={{href: `/exercise-edit/${ex.id}`}}>edit...</LmLinkButton>
                </View>
            ))}
        </View>
    )
}