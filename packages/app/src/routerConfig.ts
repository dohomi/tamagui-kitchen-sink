export type RouterNavigationProps = {
    home: undefined
    overview: undefined
    'user-detail': {
        id: string
    },
    dashboard: undefined
    auth: undefined
};

export type RouterScreenProps = {
    [K in keyof RouterNavigationProps]: string;
};

export const nativeScreens = {
    home: '',
    'user-detail': 'user/:id',
    overview: 'overview',
    dashboard: 'dashboard',
    auth: 'auth'
} as RouterScreenProps