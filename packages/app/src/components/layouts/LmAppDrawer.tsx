import { Button, Sheet, XStack, YStack } from 'tamagui'

import { useAppState } from 'app/src/state/appState'
import React, { useState } from 'react'
import { useOnRouteChange } from 'app/src/navigation/useOnRouteChange'
import { changeLanguage } from 'app/src/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { LmButton, LmGrid } from '@tamagui-extras/core'
import { LmLinkButton } from '@tamagui-extras/link'

export function LmAppDrawer() {
  const { t } = useTranslation()
  const { isMainDrawerOpen, setMainDrawer } = useAppState()
  const [position, setPosition] = useState(0)
  useOnRouteChange(() => setMainDrawer(false))

  return (
    <>
      <Sheet
        modal
        open={isMainDrawerOpen}
        onOpenChange={setMainDrawer}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
      >
        <Sheet.Overlay />
        <Sheet.Handle />

        <Sheet.Frame alignItems="center" justifyContent="center">
          <Sheet.ScrollView>
            <LmGrid space container row={'sm'}>
              <LmGrid>
                <LmLinkButton link={{ href: '/' }}>{t('home')}</LmLinkButton>
              </LmGrid>
              <LmGrid>
                <LmLinkButton link={{ href: '/icons' }}>{t('icons')}</LmLinkButton>
              </LmGrid>
              <LmGrid>
                <LmLinkButton link={{ href: '/playground' }}>{t('playground')}</LmLinkButton>
              </LmGrid>
              <LmGrid>
                <LmLinkButton link={{ href: '/overview' }}>
                  {t('overviewScreen.headline')}
                </LmLinkButton>
              </LmGrid>
            </LmGrid>
            <YStack padding="$4" justifyContent="center" alignItems="center">
              <XStack space marginVertical={'$4'}>
                <LmButton onPress={() => changeLanguage('de')}>DE</LmButton>
                <LmButton onPress={() => changeLanguage('en')}>EN</LmButton>
              </XStack>
              <Button onPress={() => setMainDrawer(false)}>{t('close')}</Button>
            </YStack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
