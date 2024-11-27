import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { MainPageNavList } from "./MainPageNavList";

export const HeroFooterLinks = () => {
    return (
        <>
            <div
                className="hidden tab:flex justify-center mx-[auto] mt-6 max-w-[540px] 
                       tab:mt-8
                       tab:mx-0 tab:max-w-[none] tab:justify-between tab:items-baseline pc:mt-2 desk:mt-10 mb-6"
            >
                <BuyMeCoffeeLink
                    className="hidden tab:flex"
                    textClassName="pc:left-[56px]"
                />
            </div>
            <MainPageNavList />
        </>
    );
};
