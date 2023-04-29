import { Card, CardProps, ColorProp, ColorTokens, Paragraph, useThemeName, XStack } from 'tamagui'
import { CheckCircleRegular, InfoRegular, WarningCircleRegular, WarningRegular } from './icons'

type Severity = 'default' | 'error' | 'info' | 'warning' | 'success'
export type LmAlertProps = CardProps & {
  severity?: Severity
  text?: string
  outlined?: boolean
  hideIcon?: boolean
}

const severityColor: { [k in Severity]: ColorProp } = {
  default: '$gray3',
  error: '$red10',
  info: '$blue10',
  warning: '$orange10',
  success: '$green10',
}

type AlertIconProps = {
  severity?: Severity
  outlined?: boolean
  shouldInvert?: boolean
}

function AlertIcon({ severity = 'default', outlined, shouldInvert }: AlertIconProps) {
  const props: { color?: ColorTokens } = {}
  if (outlined) {
    props.color = severityColor[severity] as ColorTokens
  } else if (shouldInvert) {
    props.color = 'white'
  }
  return {
    default: <InfoRegular {...props} />,
    error: <WarningCircleRegular {...props} />,
    info: <InfoRegular {...props} />,
    warning: <WarningRegular {...props} />,
    success: <CheckCircleRegular {...props} />,
  }[severity]
}

export function LmAlert({
  severity = 'default',
  text,
  hideIcon,
  outlined,
  children,
  ...rest
}: LmAlertProps) {
  const theme = useThemeName()
  let shouldInverse = theme === 'light' && severity !== 'default' && !outlined
  return (
    <Card
      // themeInverse={shouldInverse}
      bordered={outlined}
      {...(outlined
        ? {
            // border: `1px solid ${severityColor[severity]}`,
            borderColor: severityColor[severity],
            color: severityColor[severity],
          }
        : {
            backgroundColor: severityColor[severity],
          })}
      padding={rest.padding || '$4'}
    >
      <XStack space alignItems={'center'}>
        <AlertIcon shouldInvert={shouldInverse} severity={severity} outlined={outlined} />
        {text && (
          <Paragraph
            fontWeight={outlined ? 'bold' : undefined}
            color={outlined ? severityColor[severity] : shouldInverse ? 'white' : undefined}
          >
            {text}
          </Paragraph>
        )}
        {children}
      </XStack>
    </Card>
  )
}
