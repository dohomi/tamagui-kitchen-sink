import DateTimePicker from '@react-native-community/datetimepicker'
import { LmDatepickerProps } from './datepickerTypes'
import { LmFormFieldContainer } from '../../form'
import { useId, useState } from 'react'
import { Button, Input, XGroup, XStack } from 'tamagui'
import { Platform } from 'react-native'
import { getLocaleDate } from '../dateHelper'
import { Calendar } from 'tamagui-phosphor-icons'
import { OnDatesChangeProps, START_DATE } from '@datepicker-react/hooks'

export function LmDatepicker({
  numberOfMonths,
  isRangePicker,
  onChange,
  labelFunctions,
  startDate = null,
  endDate = null,
  required,
  error,
  helperText,
  label,
  labelProps,
  labelInline,
}: LmDatepickerProps) {
  const id = useId()
  const [startOpen, startOpenChange] = useState(false)
  const [endOpen, endOpenChange] = useState(false)
  const [state, setState] = useState<OnDatesChangeProps>({
    startDate: startDate,
    endDate: endDate,
    focusedInput: START_DATE,
  })
  return (
    <LmFormFieldContainer
      id={id}
      error={error}
      required={required}
      labelProps={labelProps}
      label={label}
      labelInline={labelInline}
      helperText={helperText}
    >
      <XStack space width={Platform.OS === 'web' ? 'fit-content' : undefined}>
        <XGroup>
          <XGroup.Item>
            <Input
              width={'$12'}
              value={state.startDate ? getLocaleDate({ date: state.startDate }) : ''}
            ></Input>
          </XGroup.Item>
          <XGroup.Item>
            <Button onPress={() => startOpenChange(true)} icon={<Calendar />} />
          </XGroup.Item>
        </XGroup>
        {isRangePicker && (
          <XGroup>
            <XGroup.Item>
              <Input
                width={'$12'}
                value={state.endDate ? getLocaleDate({ date: state.endDate }) : ''}
              />
            </XGroup.Item>
            <XGroup.Item>
              <Button onPress={() => endOpenChange(true)} icon={<Calendar />} />
            </XGroup.Item>
          </XGroup>
        )}
      </XStack>
      {startOpen && (
        <DateTimePicker
          value={state?.startDate ?? new Date()}
          onChange={(event, date) => {
            setState((old) => ({
              ...old,
              startDate: date ?? null,
            }))
            startOpenChange(false)
          }}
        />
      )}
      {endOpen && <DateTimePicker value={state?.endDate ?? new Date()} />}
    </LmFormFieldContainer>
  )
}
