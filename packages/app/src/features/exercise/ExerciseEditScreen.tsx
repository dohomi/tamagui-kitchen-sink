import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {LmAlert, LmFormRhfProvider, LmInputRhf, LmSubmitButtonRhf, useIsomorphicLayoutEffect} from "@my/ui";
import {XStack, YStack} from "tamagui";
import {useExerciseInsertMutation, useExerciseUpdateMutation} from "app/src/utils/__generated__/graphql";
import {getUid} from "app/src/lib/createUid";
import {useRouter} from "solito/router";
import {useRouteParam} from "app/src/navigation/useParam";


export function ExerciseEditScreen() {
    const [id] = useRouteParam('id', true)
    const {data, error, mutate: insert, isLoading, isSuccess} = useExerciseInsertMutation()
    const {data: dataUpdate, error: error2, mutate: update, isLoading: isLoading2} = useExerciseUpdateMutation()
    console.log(id)
    const {push} = useRouter()
    let newExerciseId = data?.insert_exercise_one?.id;
    useIsomorphicLayoutEffect(() => {
        console.log(data)
        if (newExerciseId && !id) {
            push(`/exercise-edit/${newExerciseId}`) // forward to edit
        }
    }, [newExerciseId, push, id])
    const err: any = error || error2
    const onSubmit = async (data) => {
        const currentId = id || newExerciseId;
        if (!currentId) {
            console.log('data#', data, id)
            await insert({
                object: {
                    ...data,
                    id: getUid()
                }
            })
        } else {
            console.log(data, id)
            await update({id: currentId, set: data})
        }
    }
    return (
        <LmFormRhfProvider>
            <LmAppShell title={id ? 'Edit your ' + id : 'New Excise'} rightContent={(
                <>
                    <LmSubmitButtonRhf colorVariant={'primary'}
                                       loading={isLoading || isLoading2}
                                       onSubmit={onSubmit}>Save</LmSubmitButtonRhf>
                </>
            )}>
                <XStack padding={'$4'} space>
                    {err && (
                        <LmAlert severity={'error'} text={err}/>
                    )}

                    <YStack space>
                        <LmInputRhf name={'title'} label={'Title'}/>
                    </YStack>
                </XStack>
            </LmAppShell>
        </LmFormRhfProvider>
    )
}