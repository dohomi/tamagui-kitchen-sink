import {useState} from 'react';
import Select, {Props} from 'react-select';
import {useTheme} from 'tamagui';


export type LmMultiSelectProps = {} & Props

export function LmMultiSelectWeb(props: LmMultiSelectProps) {
    const [selectedOption, setSelectedOption] = useState(null);
    const {background, backgroundHover} = useTheme()

    // console.log(background, color, borderColor)
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
            onChange={setSelectedOption}
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