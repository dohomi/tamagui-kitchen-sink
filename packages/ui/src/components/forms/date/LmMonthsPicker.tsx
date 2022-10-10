import {getMonthOptions} from "./dateHelper";
import {LmSelect, LmSelectProps} from "../LmSelect";
import {useMemo} from "react";

export type LmMonthsPickerProps = Omit<LmSelectProps, 'options'>

export function LmMonthsPicker(selectProps: LmMonthsPickerProps) {
    const names = useMemo(() => {
        return getMonthOptions()
    }, [])
    return (
        <LmSelect options={names} {...selectProps}/>
    )
}