export interface HighlightPurpleItemType {
    text: string;
    decoration: null | "purple";
}

export const highlightPurple = (title: string): HighlightPurpleItemType[] => {
    if (!title.includes("<purple>") || !title.includes("</purple>")) {
        return [
            {
                text: title,
                decoration: null,
            },
        ];
    }

    return title
        .split(/(<purple>.*?<\/purple>)/)
        .filter(Boolean)
        .map(item => {
            if (item.includes("<purple>")) {
                const match = item.match(/<purple>(.*?)<\/purple>/);
                return {
                    text: match ? match[1] : "",
                    decoration: "purple",
                };
            }
            return {
                text: item,
                decoration: null,
            };
        });
};
