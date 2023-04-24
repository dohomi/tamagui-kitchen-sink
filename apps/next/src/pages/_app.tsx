import '@tamagui/core/reset.css'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/src/provider'
import { useThemeState } from 'app/src/state/themeState'
import Head from 'next/head'
import React, { useEffect } from 'react'
import type { SolitoAppProps } from 'solito'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import { appWithTranslation } from 'next-i18next'

import 'raf/polyfill'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [theme, setTheme] = useRootTheme()
  const { name } = useThemeState()
  useEffect(() => {
    if (name) {
      setTheme(name)
    }
  }, [name, setTheme])

  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/apps/next/public/favicon.ico" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme as any} forcedTheme={theme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          <Component {...pageProps} />
        </Provider>
      </NextThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
