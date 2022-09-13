import {H1, LmAlert, LmButton, LmFormRfhProvider, LmInputRhf, LmSubmitButtonRhf, XGroup} from '@my/ui'
import {useSignInEmailPassword, useSignUpEmailPassword} from '@nhost/react'
import {useState} from "react";
import {AnonymousGuard} from "app/src/components/guards/AnonymousGuard";
import {LmAnonymousShell} from "app/src/components/layouts/LmAnonymousShell";
import {YStack} from "tamagui";

export function AuthScreen() {
    const [loginState, setLoginState] = useState<'login' | 'register'>('login')
    const {signInEmailPassword, isLoading, error, needsEmailVerification, user} = useSignInEmailPassword()
    const {
        signUpEmailPassword,
        isLoading: isLoading2,
        error: error2,
        user: user2,
        needsEmailVerification: needsEmailVerification2
    } = useSignUpEmailPassword()
    const err = error || error2
    const usr = user || user2
    console.log(user)
    return (
        <AnonymousGuard>
            <LmFormRfhProvider>
                <LmAnonymousShell>
                    <YStack padding={'$4'} space>
                        <H1 textAlign={'center'}>Welcome</H1>
                        {err && (
                            <LmAlert severity={'error'} text={err.message}/>
                        )}
                        <YStack alignItems={'center'}>
                            <XGroup size={'$5'}>
                                <LmButton
                                    onPress={() => setLoginState('login')}
                                    colorVariant={loginState === 'login' ? 'primary' : undefined}>Login</LmButton>
                                <LmButton
                                    onPress={() => setLoginState('register')}
                                    colorVariant={loginState === 'register' ? 'primary' : undefined}>Register</LmButton>
                            </XGroup>
                        </YStack>

                        <LmInputRhf name={'email'} fullWidth label={'Email'} required/>
                        <LmInputRhf name={'password'} fullWidth label={'Password'} size={'$3'} required/>
                        <LmSubmitButtonRhf
                            loading={isLoading || isLoading2}
                            onSubmit={async (data) => {
                                if (loginState === 'login') {
                                    await signInEmailPassword(data.email, data.password)
                                } else if (loginState === 'register') {
                                    if (process.env.STORYBOOK) {
                                        console.log('not allowed in Storybook')
                                        return
                                    }
                                    await signUpEmailPassword(data.email, data.password)
                                }
                            }}>Login</LmSubmitButtonRhf>
                    </YStack>

                </LmAnonymousShell>
            </LmFormRfhProvider>
        </AnonymousGuard>
    )
}