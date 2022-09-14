export type RouterNavigationProps = {
    home: undefined
    overview: undefined
    'user-detail': {
        id: string
    },
    dashboard: undefined
    auth: undefined
    settings: undefined
    exerciseStack: undefined
    exercise: {
        id: string
    }
    'exercise-edit': {
        id: string
    }
    'exercise-new': undefined
    exercises: undefined
};

export type RouterScreenProps = {
    [K in keyof RouterNavigationProps]: string;
};

export const nativeScreens = {
    home: '',
    'user-detail': 'user/:id',
    overview: 'overview',
    dashboard: 'dashboard',
    auth: 'auth',
    exercises: 'exercises',
    'exercise-edit': 'exercise-edit/:id',
    'exercise-new': 'exercise-new',
    'exercise': 'exercise/:id'
} as RouterScreenProps