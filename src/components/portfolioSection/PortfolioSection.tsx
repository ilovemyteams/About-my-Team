import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioTitle } from "./PortfolioTitle";

export const PortfolioSection = () => {
    return (
        <Section>
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCard />
                <Button className="">Button</Button>
            </div>
        </Section>
    );
};
