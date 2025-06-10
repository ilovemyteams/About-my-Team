import { InternationalizedArrayPortableColorTitle } from "@/types/sanity.types";

export const getEnglishTitleFromBlocks = (
    title: InternationalizedArrayPortableColorTitle
) => {
    const engTitleBlock = title?.find(block => block._key === "en")?.value;

    if (engTitleBlock) {
        return (
            engTitleBlock
                .flatMap(({ children }) =>
                    children?.map(child => child.text || "")
                )
                .join(" ") || "No title"
        );
    }
    return "No title";
};
