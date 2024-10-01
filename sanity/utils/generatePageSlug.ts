import { getClient } from "@/sanity/lib/client";
import {
    InternationalizedArrayPortableColorTitle,
    Page,
} from "@/types/sanity.types";

import { getEnglishTitleFromBlocks } from "./getEnglishTitleFromBlocks";

const getParentSlug = async (parentPageId: string) => {
    const parentPage = await getClient().fetch(
        `*[_id == $id || _id == "drafts.${parentPageId}"][0] { pageSlug }`,
        { id: parentPageId }
    );
    return parentPage?.pageSlug?.current || "";
};

export const generatePageSlug = async (doc: Page, slugMaxLength: number) => {
    const pageTitle = getEnglishTitleFromBlocks(
        doc.title as InternationalizedArrayPortableColorTitle
    );

    const pageSlug = pageTitle
        .toLowerCase()
        .replace(/\s+/g, "-")
        .slice(0, slugMaxLength - 1);

    const parent = doc.parentPage;

    if (parent?._ref) {
        const parentSlug = await getParentSlug(parent._ref);
        return `${parentSlug}/${pageSlug}`;
    }

    return pageSlug;
};
