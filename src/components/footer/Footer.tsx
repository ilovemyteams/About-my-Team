import { ButtonShare } from "../shared/ButtonShare";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter/TitleFooter";

export const Footer = () => {
    return (
        <footer className="w-auto mx-[16px] tab:px-[24px] tab:mx-0 pc:ml-[80px] pc:px-[60px] tab:mb-[40px] tab:block ">
            <div className="border-y-[1px] border-solid border-purple-stroke">
                <TitleFooter />
                <div className="mb-[16px] flex tab:items-baseline pb-0 tab:mb-[28px] justify-between">
                    <MenuFooter />
                    <div className="flex flex-col justify-between items-center pc:flex-row pc:gap-[92px] pc:items-baseline">
                        <BuyMeCoffeeLink />
                        <div className="flex w-[48px] h-[48px] justify-center pc:w-auto">
                            <ButtonShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-0 my-[20px] pc:mt-[18.5px] pc:flex-row-reverse pc:justify-between">
                <PrivacyPolicy />
                <Copyright />
            </div>
        </footer>
    );
};
