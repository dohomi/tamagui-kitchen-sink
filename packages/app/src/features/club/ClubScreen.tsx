import React from "react";
import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {H1, H6, Spinner} from "@my/ui";
import { useUserId } from '@nhost/react';
import {useUserQuery} from "app/src/utils/__generated__/graphql";

export function ClubScreen() {
    const id = useUserId();
    const {data, isLoading, error} = useUserQuery({id})
    if (error) {
        console.log(error)
    }
    if(isLoading) {
        return <Spinner />
    }
    console.log(id, data)
    console.log(data)
    return (
        <LmAppShell title={'Clubs'}>
            <H1>Clubs</H1>
            <H6>{id}</H6>
            <H6>{JSON.stringify(data)}</H6>
        </LmAppShell>
    )
}