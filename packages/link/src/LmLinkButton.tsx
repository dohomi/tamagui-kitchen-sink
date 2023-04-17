import { LmButton, LmButtonProps } from '@tamagui-extras/core'
import { useLink, UseLinkProps } from 'solito/link'

export type LmLinkButtonProps = LmButtonProps & {
  link: UseLinkProps
}

export function LmLinkButton({ link, ...props }: LmLinkButtonProps) {
  const linkProps = useLink(link)

  return <LmButton {...props} {...linkProps} />
}
