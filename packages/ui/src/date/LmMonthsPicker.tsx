import {getMonthOptions} from "./dateHelper";
import {LmSelect, LmSelectProps} from "../components/forms";

export type LmMonthsPickerProps = Omit<LmSelectProps, 'options'>

export function LmMonthsPicker(selectProps: LmMonthsPickerProps) {
    const names = getMonthOptions()
    return (
        <LmSelect options={names} {...selectProps}/>
    )
}