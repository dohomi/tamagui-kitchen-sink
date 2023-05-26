import { Button, ScrollView, XStack, YStack } from 'tamagui'
import { useAppState } from 'app/src/state/appState'
import React, { useState } from 'react'
import { useOnRouteChange } from 'app/src/navigation/useOnRouteChange'
import { useTranslation } from 'react-i18next'
import { LmButton, LmGrid, LmSheet } from '@tamagui-extras/core'
import { useRouter } from 'solito/router'
import { LmLinkButton } from '@tamagui-extras/link'
import { Platform } from 'react-native'

export function LmAppDrawer() {
  const { t, i18n } = useTranslation()
  const { isMainDrawerOpen, setMainDrawer } = useAppState()
  const [position, setPosition] = useState(0)
  const { push } = useRouter()
  useOnRouteChange(() => setMainDrawer(false))

  return (
    <LmSheet
      modal
      open={isMainDrawerOpen}
      onOpenChange={setMainDrawer}
      snapPoints={[85, 50, 25]}
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
    >
      <ScrollView justifyContent="center" alignItems="center">
        <YStack>
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
            <LmGrid>
              <LmLinkButton link={{ href: '/media' }}>{t('mediaScreen.headline')}</LmLinkButton>
            </LmGrid>
          </LmGrid>
        </YStack>

        <YStack padding="$4" justifyContent="center" alignItems="center">
          <XStack space marginVertical={'$4'}>
            <LmButton
              onPress={() => {
                if (process.env.STORYBOOK || Platform.OS !== 'web') {
                  return i18n.changeLanguage('de')
                }
                push('/', undefined, { locale: 'de' })
              }}
            >
              DE
            </LmButton>
            <LmButton
              onPress={() => {
                if (process.env.STORYBOOK || Platform.OS !== 'web') {
                  return i18n.changeLanguage('en')
                }
                push('/', undefined, { locale: 'en' })
              }}
            >
              EN
            </LmButton>
          </XStack>
          <Button onPress={() => setMainDrawer(false)}>{t('close')}</Button>
        </YStack>
      </ScrollView>
    </LmSheet>
  )
}
