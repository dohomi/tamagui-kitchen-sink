import {
  Card,
  CardProps,
  ColorProp,
  ColorTokens,
  Paragraph,
  ParagraphProps,
  useThemeName,
  XStack,
  XStackProps,
} from 'tamagui'
import {
  CheckCircleRegular,
  IconProps,
  InfoRegular,
  WarningCircleRegular,
  WarningRegular,
} from './icons'

type Severity = 'default' | 'error' | 'info' | 'warning' | 'success'
export type LmAlertProps = CardProps & {
  severity?: Severity
  text?: string
  outlined?: boolean
  hideIcon?: boolean
  paragraphProps?: ParagraphProps
  xStackProps?: XStackProps
  iconProps?: IconProps
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
  paragraphProps,
  xStackProps,
  iconProps,
  ...rest
}: LmAlertProps) {
  const theme = useThemeName()
  let shouldInverse = theme === 'light' && severity !== 'default' && !outlined
  return (
    <Card
      bordered={outlined}
      {...(outlined
        ? {
            borderColor: severityColor[severity],
            color: severityColor[severity],
          }
        : {
            backgroundColor: severityColor[severity],
          })}
      {...rest}
      padding={rest.padding || '$4'}
    >
      <XStack space alignItems={'center'} {...xStackProps}>
        <AlertIcon
          shouldInvert={shouldInverse}
          severity={severity}
          outlined={outlined}
          {...iconProps}
        />
        {text && (
          <Paragraph
            color={outlined ? severityColor[severity] : shouldInverse ? 'white' : undefined}
            {...paragraphProps}
          >
            {text}
          </Paragraph>
        )}
        {children}
      </XStack>
    </Card>
  )
}
