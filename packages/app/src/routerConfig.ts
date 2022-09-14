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
};

export type RouterExerciseNavigationProps = {
    exercise: {
        id: string
    }
    'exercise-edit': {
        id: string
    }
    exercises: undefined
}

export type RouterScreenProps = {
    [K in keyof (RouterNavigationProps | RouterExerciseNavigationProps)]: string;
};

export const nativeScreens = {
    home: '',
    'user-detail': 'user/:id',
    overview: 'overview',
    dashboard: 'dashboard',
    auth: 'auth',
    exercises: 'exercises',
    'exercise-edit': 'exercise-edit/:id',
    'exercise': 'exercise/:id'
} as RouterScreenProps