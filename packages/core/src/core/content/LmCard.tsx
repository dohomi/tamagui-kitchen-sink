import { Card, CardProps, H2, Paragraph, ThemeName } from 'tamagui'
import { PropsWithChildren, ReactNode } from 'react'
import { LmImage } from './LmImage'

export type LmCardProps = PropsWithChildren<
  CardProps & {
    bouncy?: boolean
    title?: string
    subTitle?: string
    footer?: ReactNode
    image?: {
      width: number
      height: number
      src: string
    }
  }
>

export const LmCard = ({
  bouncy,
  title,
  subTitle,
  footer,
  image,
  children,
  theme = 'gray' as ThemeName,
  ...cardProps
}: LmCardProps) => {
  return (
    <Card
      elevate
      size="$4"
      bordered
      {...(bouncy && {
        animation: 'bouncy',
        scale: 0.9,
        hoverStyle: {
          scale: 0.925,
        },
        pressStyle: {
          scale: 0.875,
        },
      })}
      theme={theme}
      {...cardProps}
    >
      {(title || subTitle) && (
        <Card.Header padded>
          {title && <H2>{title}</H2>}
          {subTitle && <Paragraph theme={'alt2'}>{subTitle}</Paragraph>}
        </Card.Header>
      )}
      {children}
      {footer && <Card.Footer padded>{footer}</Card.Footer>}
      {!!image?.src && (
        <Card.Background>
          <LmImage
            position="absolute"
            resizeMode="cover"
            width={'100%'}
            height={'auto'}
            src={image.src}
            source={{ width: image.width, height: image.height }}
          />
        </Card.Background>
      )}
    </Card>
  )
}
