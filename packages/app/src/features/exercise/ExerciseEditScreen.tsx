import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {createParam} from 'solito'
import {LmAlert, LmFormRhfProvider, LmInputRhf, LmSubmitButtonRhf} from "@my/ui";
import {Text, XStack, YStack} from "tamagui";
import {useExerciseInsertMutation, useExerciseUpdateMutation} from "app/src/utils/__generated__/graphql";
import {getUid} from "app/src/lib/createUid";

const {useParam} = createParam<{ id: string }>()

export function ExerciseEditScreen() {
    const [id] = useParam('id')
    const {data, error, mutate: insert, isLoading} = useExerciseInsertMutation()
    const {data: data2, error: error2, mutate: update, isLoading: isLoading2} = useExerciseUpdateMutation()
    if (error) {
        console.log(error)
        return (
            <Text>error</Text>
        )
    }
    return (
        <LmFormRhfProvider>
            <LmAppShell title={'Edit your ' + id} rightContent={(
                <>
                    <LmSubmitButtonRhf colorVariant={'primary'}
                                       loading={isLoading || isLoading2}
                                       onSubmit={async (data) => {
                                           if (!id) {
                                               console.log('data#', data, id)
                                               await insert({
                                                   object: {
                                                       ...data,
                                                       id: getUid()
                                                   }
                                               })
                                           } else {
                                               await update({id, set: data})
                                           }
                                       }}>Save</LmSubmitButtonRhf>
                </>
            )}>
                <XStack padding={'$4'} space>
                    {error || error2 && (
                        <LmAlert severity={'error'} text={error?.message}/>
                    )}

                    <YStack space>
                        <LmInputRhf name={'title'} label={'Title'}/>
                    </YStack>
                </XStack>
            </LmAppShell>
        </LmFormRhfProvider>
    )
}