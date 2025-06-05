import { Accordion } from "./Accordion";

type FaqList = Array<{
    question: string | null;
    shortAnswer: string | null;
}> | null;

export const QuestionsList = ({ faqList }: { faqList: FaqList }) => {
    return (
        <div className="mb-[40px] pc:ml-[270px] tab:mb-[48px]">
            <ul>
                {faqList &&
                    faqList.map((item, idx) => {
                        return <Accordion key={idx} item={item} />;
                    })}
            </ul>
        </div>
    );
};
