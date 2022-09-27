export type RouterNavigationProps = {
    home: undefined
    overview: undefined
    dashboard: undefined
    playground: undefined
};

export type RouterScreenProps = {
    [K in keyof RouterNavigationProps]: string;
};

export const nativeScreens = {
    home: '',
    overview: 'overview',
    dashboard: 'dashboard',
    playground: 'playground'
} as RouterScreenProps