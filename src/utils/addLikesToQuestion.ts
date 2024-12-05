import { QAItemType } from "../mockedData/questionsData";
import { LikesTypes } from "./likeDataHandler";

export const addLikesToQuestion = (
    likes: LikesTypes[],
    question: QAItemType[]
) => {
    const updatedQuestionData = question.map(item => ({
        ...item,
        data: {
            ...item.data,
            likes: likes.filter(like => like.questionSlug === item.data.slug),
        },
    }));

    return updatedQuestionData;
};
