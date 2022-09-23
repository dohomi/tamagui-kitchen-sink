export type RouterNavigationProps = {
    home: undefined
    overview: undefined
    dashboard: undefined
    playground: undefined
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
    clubs: undefined
    profile: undefined
};

export type RouterScreenProps = {
    [K in keyof RouterNavigationProps]: string;
};

export const nativeScreens = {
    home: '',
    overview: 'overview',
    dashboard: 'dashboard',
    playground: 'playground',
    auth: 'auth',
    clubs: 'clubs',
    exercises: 'exercises',
    profile: 'profile',
    'exercise-edit': 'exercise-edit/:id',
    'exercise-new': 'exercise-new',
    'exercise': 'exercise/:id'
} as RouterScreenProps