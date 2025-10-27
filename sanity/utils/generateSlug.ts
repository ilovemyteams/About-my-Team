import { SanityDocument } from "next-sanity";

import {
    InternationalizedArrayString,
    InternationalizedArrayText,
} from "@/sanity/types";

export const generateSlug = (
    doc: SanityDocument,
    sourceField: string,
    maxLength = 100
) => {
    const source = doc[sourceField] as
        | InternationalizedArrayString
        | InternationalizedArrayText;
    console.log(source.find(item => item._key === "en"));
    const pageTitle = source.find(item => item._key === "en")?.value || "title";
    console.log(pageTitle);
    const pageSlug = pageTitle
        .toLowerCase()
        .replace(new RegExp("[.,/#!$%^&*;:{}=\\-_~()?'\"`]", "g"), "")
        .replace(/\s+/g, "-");

    return pageSlug.slice(0, maxLength);
};
