import {nhost} from '../lib/nhostClient'
import {GraphQLClient} from 'graphql-request'

type AuthHeaderProps = {
    authorization: string
}

const gqlRequest = new GraphQLClient(nhost.graphql.getUrl())

export const fetchData = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers']
): (() => Promise<TData>) => {
    return async () => {
        const authHeaders = {} as AuthHeaderProps

        if (nhost.auth.isAuthenticated()) {
            authHeaders['authorization'] = `Bearer ${nhost.auth.getAccessToken()}`
        }

        console.log(authHeaders)
        const res = await gqlRequest.request(query, variables, {
            ...authHeaders
        })
        // const res = await request(nhost.graphql.getUrl(), query, variables, {
        //     ...authHeaders
        // })
        // const res = await fetch(nhost.graphql.getUrl(), {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         ...authHeaders,
        //         ...(options ?? {})
        //     },
        //     body: JSON.stringify({
        //         query,
        //         variables
        //     })
        // })

        // const json = await res.json()
        if (res.errors) {
            const {message} = res.errors[0] || 'Error..'
            throw new Error(message)
        }

        return res
    }
}