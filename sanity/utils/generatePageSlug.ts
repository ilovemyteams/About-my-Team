import { getClient } from "@/sanity/lib/client";
import { InternationalizedArrayString, Page } from "@/types/sanity.types";

import { getEnglishTitleFromIntArrays } from "./getEnglishTitleFromIntArrays";

const getParentSlug = async (parentPageId: string) => {
    const parentPage = await getClient().fetch(
        `*[_id == $id || _id == "drafts.${parentPageId}"][0] { pageSlug }`,
        { id: parentPageId }
    );
    return parentPage?.pageSlug?.current || "";
};

export const generatePageSlug = async (doc: Page, slugMaxLength: number) => {
    const pageTitle = getEnglishTitleFromIntArrays(
        doc.title as InternationalizedArrayString
    );

    const pageSlug = pageTitle
        .toLowerCase()
        .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, "")
        .replace(/\s+/g, "-");

    const parent = doc.parentPage;

    if (parent?._ref) {
        const parentSlug = await getParentSlug(parent._ref);
        return `${parentSlug}/${pageSlug}`.slice(0, slugMaxLength - 1);
    }

    return pageSlug.slice(0, slugMaxLength - 1);
};
