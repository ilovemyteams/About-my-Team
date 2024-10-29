import type {
    ListTextItemType,
    LongAnswerListType,
    LongAnswerListTypeItem,
} from "../mockedData/questionsData";

const getAllTexts = (data: LongAnswerListTypeItem | ListTextItemType) => {
    let result = data.title ? `${data.title}` : "";
    data.text.forEach(item => {
        if (typeof item === "string") {
            result += `${item} `;
        } else {
            result += getAllTexts(item);
        }
    });

    return result;
};

export const getTextString = (content: LongAnswerListType[] | undefined) => {
    if (!content) {
        return "";
    }
    return content.reduce((acc, item) => {
        const flatText = item.data.reduce((acc, subitem) => {
            const text = getAllTexts(subitem);
            return `${acc} ${text}`;
        }, "");

        return `${acc} ${flatText}`;
    }, "");
};
