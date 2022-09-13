import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {H1} from "@my/ui";
import {createParam} from 'solito'

const {useParam} = createParam<{ id: string }>()

export function ExerciseDetailScreen() {
    const [id] = useParam('id')

    return (
        <LmAppShell title={'Exercise Detail ' + id}>
            <H1>Exercise detail</H1>
        </LmAppShell>
    )
}