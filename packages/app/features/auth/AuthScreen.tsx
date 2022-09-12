import {ScrollView} from "react-native";
import {LmFormRfhProvider, LmInputRhf, LmSubmitButtonRhf} from '@my/ui'
import {XStack, YStack} from "tamagui";
import {useSignInEmailPassword, useSignUpEmailPassword} from '@nhost/react'

export function AuthScreen() {
    const {signInEmailPassword, isLoading, error, needsEmailVerification} = useSignInEmailPassword()
    const {
        signUpEmailPassword,
        isLoading: isLoading2,
        error: error2,
        needsEmailVerification: needsEmailVerification2
    } = useSignUpEmailPassword()
    const err = error || error2
    return (
        <LmFormRfhProvider>
            <ScrollView>
                <XStack justifyContent={'center'}>
                    <YStack space>
                        <h1>Welcome</h1>
                        {err && (
                            <h3 color={'red'}>
                                {err.message}
                            </h3>
                        )}
                        <LmInputRhf name={'email'} label={'Email'} labelInline required/>
                        <LmInputRhf name={'password'} label={'Password'} labelInline required/>
                        <LmSubmitButtonRhf
                            loading={isLoading || isLoading2}
                            onSubmit={async (data) => {
                                console.log(data)
                                await signInEmailPassword(data.email, data.password)
                            }}>Login</LmSubmitButtonRhf>
                    </YStack>
                </XStack>
            </ScrollView>
        </LmFormRfhProvider>
    )
}