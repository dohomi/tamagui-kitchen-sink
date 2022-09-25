import React from "react";
import {LmAppShell} from "app/src/components/layouts/LmAppShell";
import {H1, H5, H6, Spinner} from "@my/ui";
import { useUserId } from '@nhost/react';
import {useUserQuery} from "app/src/utils/__generated__/graphql";

export function ProfileScreen() {
    const id = useUserId();
    const {data, isLoading, error} = useUserQuery({id})
    if (error) {
        console.log(error)
    }
    if(isLoading) {
        return <Spinner />
    }
    return (
        <LmAppShell title={'Profile'}>
            <H1>Profile</H1>
            <H5>ID: {id}</H5>
            <H6>Email: {data?.user?.email}</H6>
        </LmAppShell>
    )
}