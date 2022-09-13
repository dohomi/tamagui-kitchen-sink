import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {createParam} from 'solito'
import {LmFormRhfProvider, LmInputRhf, LmSubmitButtonRhf} from "@my/ui";

const {useParam} = createParam<{ id: string }>()

export function ExerciseEditScreen() {
    const [id] = useParam('id')

    return (
        <LmAppShell title={'Edit your ' + id}>
            <LmFormRhfProvider>
                <LmInputRhf name={'title'}/>

                <LmSubmitButtonRhf onSubmit={(data) => {
                    console.log('data#', data)
                }}>Submit</LmSubmitButtonRhf>
            </LmFormRhfProvider>
        </LmAppShell>
    )
}