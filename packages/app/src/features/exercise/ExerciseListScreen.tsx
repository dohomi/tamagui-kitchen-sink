import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {H1} from "@my/ui";
import {useAllExercisesQuery} from "app/src/utils/__generated__/graphql";
import {ExerciseListCards} from "app/src/features/exercise/ExerciseListCards";

export function ExerciseListScreen() {
    const {data, isLoading, error} = useAllExercisesQuery()
    if (error) {
        console.log(error)
    }
    console.log(data)
    return (
        <LmAppShell title={'Exercises'}>
            <H1>Exercises</H1>
            <ExerciseListCards exercises={data?.exercise || []}/>
        </LmAppShell>
    )
}