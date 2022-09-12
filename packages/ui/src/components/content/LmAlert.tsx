import {Card, CardProps, ColorTokens, Paragraph} from "tamagui";

type Severity = 'default' | 'error' | 'info' | 'warning';
export type LmAlertProps = CardProps & {
    severity?: Severity
    text?: string
}

const severityColor: { [k in Severity]: ColorTokens } = {
    default: '$gray3',
    error: '$red10Dark',
    info: '$blue10',
    warning: '$orange10'
}

export function LmAlert({severity, text, children}: LmAlertProps) {
    return (
        <Card backgroundColor={severityColor[severity || 'default']} padding={'$4'}>
            {text && (
                <Paragraph>{text}</Paragraph>
            )}
            {children}
        </Card>
    )
}