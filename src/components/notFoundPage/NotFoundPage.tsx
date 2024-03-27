import { Section } from "../shared/Section";
import { BrokenHeart } from "./BrokenHeart";
import { NotFoundInfo } from "./NotFoundInfo";

export const NotFoundPage = () => {
    return (
        <Section
            className="container pt-[132px]     
            tab:flex
            tab:flex-row-reverse tab:justify-between tab:items-end
                       pc:pt-[156px] pc:pb-0 pc:mb-[156px] pc:pl-[140px]  "
        >
            <BrokenHeart />
            <NotFoundInfo />
        </Section>
    );
};
