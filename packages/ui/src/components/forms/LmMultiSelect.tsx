import {useState} from 'react';
import Select, {Props} from 'react-select';
import {useTheme} from 'tamagui';


export type LmMultiSelectProps = {
    zIndex?: number // for native
    zIndexInverse?: number // for native
} & Props

export function LmMultiSelect(props: LmMultiSelectProps) {
    const [selectedOption, setSelectedOption] = useState(null);
    const {background, backgroundHover} = useTheme()

    const handleChange = (v, actionMeta) => {
        setSelectedOption(v)
        if(typeof props.onChange === 'function') {
            const returnVal = props.isMulti ? v.map(e => e.value) : v.value
            props.onChange(returnVal, actionMeta)
        }
    }
    return (
        <Select
            {...props}
            styles={{
                container: (provided) => ({
                    ...provided,
                    backgroundColor: 'inherit'
                })
            }}
            defaultValue={selectedOption}
            onChange={handleChange}
            options={props.options}
            theme={(theme) => {
                // console.log(theme)
                return {
                    ...theme,
                    // borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        neutral0: background.val as string,
                        primary25: backgroundHover.val as string // <- hover highlight
                    },
                }
            }}
        />
    );
}