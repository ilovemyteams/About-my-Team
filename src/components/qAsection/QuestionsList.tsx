import { Accordion } from "./Accordion";

type FaqList = Array<{
    question: string | null;
    shortAnswer: string | null;
}> | null;

export const QuestionsList = ({ faqList }: { faqList: FaqList }) => {
    return (
        <div className="mb-[34px] pc:ml-[270px] pc:mb-[32px]">
            <ul>
                {faqList &&
                    faqList.map((item, idx) => {
                        return <Accordion key={idx} item={item} />;
                    })}
            </ul>
        </div>
    );
};
