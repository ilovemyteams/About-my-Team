import type { LongAnswerListType } from "../mockedData/questionsData";

const getAllTexts = (data: LongAnswerListType) => {
    let result = `${data.title} `;

    data.text.forEach(item => {
        if (typeof item === "string") {
            result += `${item} `;
        } else {
            result += getAllTexts(item as LongAnswerListType);
        }
    });

    return result;
};

export const getTextString = (data: LongAnswerListType[] | undefined) => {
    if (!data) {
        return "";
    }
    return data.reduce((acc, item) => {
        const text = getAllTexts(item);
        return `${acc} ${text}`;
    }, "");
};
