import React from 'react'
import { H3, Paragraph, Stack } from 'tamagui'
import { LmCard, LmGrid } from '../../../src'

export default {
  title: 'core/Content/Grid',
  component: LmGrid,
}

export const GridRow = () => {
  return (
    <Stack width={'95%'} overflow={'hidden'} borderWidth={'$1'} backgroundColor={'$blue4'}>
      <H3 borderBottomWidth={'$1'}>Outside container 95% width</H3>
      <LmGrid container row flexWrap={'wrap'} gap={'$6'}>
        <LmGrid xs={'auto'}>
          <LmCard title={'Auto'} />
        </LmGrid>
        <LmGrid width={'30%'} elevation={'$4'} hoverTheme pressTheme centered>
          <Paragraph>Width 30%</Paragraph>
        </LmGrid>
        <LmGrid xs={'auto'}>
          <LmCard title={'Auto'} />
        </LmGrid>
        <LmGrid xs={6} sm={3}>
          <LmCard title={'XS 6 SM 3'} />
        </LmGrid>
        <LmGrid xs={12}>
          <LmCard title={'XS 12'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Seven'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Eight '} />
        </LmGrid>
        <LmGrid xs={'auto'}>
          <LmCard title={'Auto'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Ten'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Eleven'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Twelve'} />
        </LmGrid>
      </LmGrid>
    </Stack>
  )
}

export const GridColumn = () => {
  return (
    <Stack width={'95%'} overflow={'hidden'} borderWidth={'$1'}>
      <H3 borderBottomWidth={'$1'}>Outside container 95% width, inside 600px</H3>
      <LmGrid container height={450}>
        <LmGrid height={'50px'} backgroundColor={'$red2'}>
          First
        </LmGrid>
        <LmGrid xs backgroundColor={'$green3'}>
          Second xs=true
        </LmGrid>
        <LmGrid height={'30%'} backgroundColor={'$blue3'}>
          Third: height 30%
        </LmGrid>
      </LmGrid>
    </Stack>
  )
}
