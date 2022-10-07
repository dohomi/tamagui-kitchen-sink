import {Button, Stack, Text, XStack} from "tamagui";
import {ArrowLeft, ArrowRight} from '@tamagui/feather-icons'
import {useMonth, UseMonthProps} from "@datepicker-react/hooks";
import {LmDay} from "./LmDay";

export type LmMonthProps = UseMonthProps & {
    onPrevious?: () => void
    onNext?: () => void
}

export function LmMonth({onPrevious, onNext, ...props}: LmMonthProps) {
    const {days, weekdayLabels, monthLabel} = useMonth(props);
    return (
        <Stack width={250}>
            <XStack justifyContent={'space-between'} alignItems={'center'} height={40}>
                {onPrevious ? (
                    <Button focusable={false} onPress={() => onPrevious()} icon={ArrowLeft} circular chromeless/>
                ) : <Text/>}
                <h3>{monthLabel}</h3>
                {onNext ? (
                    <Button focusable={false} onPress={() => onNext()} icon={ArrowRight} circular chromeless/>
                ) : <Text/>}
            </XStack>
            <XStack flex={7} width={250}>
                {weekdayLabels.map(dayLabel => (
                    <Text width={`${100 / 7}%`} key={dayLabel} textAlign={'center'}
                          paddingVertical={'$2'}>{dayLabel}</Text>
                ))}
            </XStack>
            <Stack display={'flex'} flexWrap={'wrap'} width={250}>
                {days.map((day, index) => {
                    if (typeof day === 'object') {
                        return (
                            <LmDay dayLabel={day.dayLabel} date={day.date} key={day.date.toString()}/>
                        )
                    }
                    return (
                        <Stack key={index} width={`${100 / 7}%`}/>
                    )
                })}
            </Stack>
        </Stack>
    )
}