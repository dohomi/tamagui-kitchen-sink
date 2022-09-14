import {LmButton, LmButtonProps} from "./LmButton";
import {useLink, UseLinkProps} from 'solito/link'

type LmLinkButtonProps = LmButtonProps & {
    link: UseLinkProps
}

export function LmLinkButton({link, ...props}: LmLinkButtonProps) {
    const linkProps = useLink(link)

    return (
        <LmButton {...props} {...linkProps} />
    )
}