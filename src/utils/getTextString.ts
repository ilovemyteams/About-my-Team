import type {
    ListTextItemType,
    LongAnswerListTypeItem,
    TextItemType,
} from "../mockedData/questionsData";

const getAllTexts = (
    data: LongAnswerListTypeItem | TextItemType | ListTextItemType
) => {
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

export const getTextString = (data: LongAnswerListTypeItem[] | undefined) => {
    if (!data) {
        return "";
    }
    return data.reduce((acc, item) => {
        const text = getAllTexts(item);
        return `${acc} ${text}`;
    }, "");
};
