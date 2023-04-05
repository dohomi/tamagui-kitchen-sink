import {Spinner, Stack} from "tamagui";

export function LmSkeleton() {
    return (
        <Stack position={'absolute'} top={0} left={0} backgroundColor={'$gray5'} width={'100%'} height={'100%'}
               alignItems={'center'} display={'flex'} justifyContent={'center'}>
            <Spinner/>
        </Stack>
    )
}