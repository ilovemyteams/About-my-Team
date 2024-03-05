import { useTranslations } from "next-intl";
import { Accordion } from "./Accordion";

export const QuestionsList = () => {
    const getTranslation = useTranslations("Q&A");
    const questionsList = [
        {
            question: getTranslation("question1"),
            answer: getTranslation("answer1"),
        },
        {
            question: getTranslation("question2"),
            answer: getTranslation("answer2"),
        },
        {
            question: getTranslation("question3"),
            answer: getTranslation("answer3"),
        },
        {
            question: getTranslation("question4"),
            answer: getTranslation("answer4"),
        },
        {
            question: getTranslation("question5"),
            answer: getTranslation("answer5"),
        },
    ];

    return (
        <div className="font-caviar text-xlb block ml-[270px] mb-[32px]">
            <ul>
                {questionsList.map((item, idx) => {
                    return <Accordion key={idx} item={item} />;
                })}
            </ul>
        </div>
    );
};
