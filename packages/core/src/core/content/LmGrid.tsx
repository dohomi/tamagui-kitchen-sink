import { styled, ThemeableStack } from 'tamagui'

export const LmGrid = styled(ThemeableStack, {
  variants: {
    row: {
      false: {
        flexDirection: 'column',
      },
      true: {
        flexDirection: 'row',
      },
      sm: {
        $gtSm: {
          flexDirection: 'row',
        },
      },
      md: {
        $gtMd: {
          flexDirection: 'row',
        },
      },
      lg: {
        $gtLg: {
          flexDirection: 'row',
        },
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
      sm: {
        $gtSm: {
          flexWrap: 'wrap',
        },
      },
      md: {
        $gtMd: {
          flexWrap: 'wrap',
        },
      },
      lg: {
        $gtLg: {
          flexWrap: 'wrap',
        },
      },
    },
    container: {
      true: {
        flexGrow: 1,
        minWidth: 0,
      },
      false: {
        flexGrow: 0,
      },
    },
    centered: {
      ':boolean': (bool) => {
        if (bool) {
          return {
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
      },
    },
    xs: {
      auto: {
        flexGrow: 1,
        maxWidth: '100%',
        minWidth: 0,
      },
      true: {
        flexGrow: 1,
        maxWidth: '100%',
        minWidth: 0,
      },
      ':number': (nr) => ({
        width: `${(nr / 12) * 100}%`,
      }),
    },
    sm: {
      auto: {
        $gtSm: {
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
        },
      },
      true: {
        $gtSm: {
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
        },
      },
      ':number': (nr) => ({
        $gtSm: {
          width: `${(nr / 12) * 100}%`,
        },
      }),
    },
    md: {
      auto: {
        $gtMd: {
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
        },
      },
      true: {
        $gtMd: {
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
        },
      },
      ':number': (nr) => ({
        $gtMd: {
          width: `${(nr / 12) * 100}%`,
        },
      }),
    },
    lg: {
      auto: {
        $gtMd: {
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
        },
      },
      true: {
        $gtMd: {
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
        },
      },
      ':number': (nr) => ({
        $gtMd: {
          width: `${(nr / 12) * 100}%`,
        },
      }),
    },
  } as const,
})
