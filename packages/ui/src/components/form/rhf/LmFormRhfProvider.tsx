import { FieldValues, FormProvider, useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { ReactNode } from 'react'

export type LmFormRhfProviderProps<T extends FieldValues = FieldValues> = UseFormProps<T> & {
  children: ((context: UseFormReturn<T>) => ReactNode) | ReactNode
  forceFormProvider?: boolean
}

export function LmFormRhfProvider<T extends FieldValues = FieldValues>({
  children,
  forceFormProvider,
  ...formProps
}: LmFormRhfProviderProps<T>) {
  const methods = useForm<T>({
    ...formProps,
  })
  return typeof children === 'function' ? (
    forceFormProvider ? (
      <FormProvider {...methods}>{children(methods)}</FormProvider>
    ) : (
      <>{children(methods)}</>
    )
  ) : (
    <FormProvider {...methods}>{children}</FormProvider>
  )
}
