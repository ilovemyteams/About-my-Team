import { defineEnableDraftMode } from "next-sanity/draft-mode";

import { readToken } from "@/src/sanity/env";
import { client } from "@/src/sanity/lib/client";

export const { GET } = defineEnableDraftMode({
    client: client.withConfig({ token: readToken }),
});
