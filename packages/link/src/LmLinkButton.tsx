import { useLink, UseLinkProps } from 'solito/link'
import { Button, ButtonProps } from 'tamagui'

export type LmLinkButtonProps = ButtonProps & {
  link: UseLinkProps
}

export function LmLinkButton({ link, ...props }: LmLinkButtonProps) {
  const linkProps = useLink(link)

  return <Button {...props} {...linkProps} />
}
