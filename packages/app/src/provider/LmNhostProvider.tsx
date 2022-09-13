import {PropsWithChildren} from "react";
import {NhostReactProvider} from "@nhost/react";
import {nhost} from "app/src/lib/nhostClient";
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from "app/src/lib/queryClient";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export function LmNhostProvider({children}: PropsWithChildren) {
    return (
        <NhostReactProvider nhost={nhost}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </NhostReactProvider>
    )
}