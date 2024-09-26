"use client";
import type { SanityClient } from "next-sanity";
import LiveQueryProvider from "next-sanity/preview";
import React from "react";
import { suspend } from "suspend-react";

import { getClient } from "../lib/client";

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol("lib/sanity.client");

export default function PreviewProvider({
    children,
    token,
}: {
    children: React.ReactNode;
    token?: string;
}) {
    const client = suspend(
        (): Promise<SanityClient> =>
            new Promise((resolve, reject) => {
                try {
                    const sanityClient = getClient(
                        token ? { token } : undefined
                    );
                    resolve(sanityClient);
                } catch (error) {
                    reject(error);
                }
            }),
        [UniqueKey]
    );

    if (!token) throw new TypeError("Missing token");

    return (
        <LiveQueryProvider client={client} token={token} logger={console}>
            {children}
        </LiveQueryProvider>
    );
}
