import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/src/provider'
import { useThemeState } from 'app/src/state/themeState'
import Head from 'next/head'
import React, { PropsWithChildren, useEffect } from 'react'
import type { SolitoAppProps } from 'solito'
import { appWithTranslation } from 'next-i18next'

if (process.env.NODE_ENV === 'production') {
  require('../../public/tamagui.css')
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/apps/next/public/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

function ThemeContainer({ children }: PropsWithChildren) {
  const [theme, setTheme] = useRootTheme()
  const { name } = useThemeState()
  useEffect(() => {
    if (name) {
      setTheme(name)
    }
  }, [name, setTheme])
  return (
    <NextThemeProvider onChangeTheme={setTheme as any} forcedTheme={theme}>
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default appWithTranslation(MyApp)
