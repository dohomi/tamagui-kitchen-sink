import { useState } from 'react';
import Select, { Props, OptionProps } from 'react-select';


type LmMultiSelectProps = {} & Props

export function LmMultiSelect(props: LmMultiSelectProps) {
    const [selectedOption, setSelectedOption] = useState(null);/**/

    return (
            <Select
                {...props}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={props.options}
            />
    );
}