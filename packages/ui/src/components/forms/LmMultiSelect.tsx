import {useId, useState} from 'react';
import Select, {Props} from 'react-select';
import {useTheme} from 'tamagui';
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";


export type LmMultiSelectProps = {
    zIndex?: number // for native
    zIndexInverse?: number // for native
} & Props & FormContainerProps

export function LmMultiSelect({
                                  required,
                                  error,
                                  helperText,
                                  label,
                                  labelProps,
                                  labelInline,
                                  ...rest
}: LmMultiSelectProps) {
    const [selectedOption, setSelectedOption] = useState(null);
    const {background, backgroundHover, borderColor} = useTheme()
    const genId = useId()
    const id = rest.id || genId

    const handleChange = (v, actionMeta) => {
        setSelectedOption(v)
        if (typeof rest.onChange === 'function') {
            const returnVal = rest.isMulti ? v.map(e => e.value) : v.value
            rest.onChange(returnVal, actionMeta)
        }
    }
    return (
        <LmFormFieldContainer id={id}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              labelInline={labelInline}
                              helperText={helperText}>
            <Select
                {...rest}
                styles={{
                    container: (provided) => ({
                        ...provided,
                        backgroundColor: 'inherit'
                    }),
                    control: (provided) => ({
                        ...provided,
                        borderColor:( error ? 'red' : borderColor) as string
                    })
                }}
                defaultValue={selectedOption}
                onChange={handleChange}
                options={rest.options}
                theme={(theme) => {
                    // console.log(theme)
                    return {
                        ...theme,
                        borderRadius: 9,
                        colors: {
                            ...theme.colors,
                            neutral0: background.val as string,
                            primary25: backgroundHover.val as string // <- hover highlight
                        },
                    }
                }}
            />
        </LmFormFieldContainer>
    );
}