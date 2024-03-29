import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { SharePopover } from "../shared/SharePopover";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter/TitleFooter";

export const Footer = () => {
    return (
        <footer className="relative pb-5 tab:hidden w-auto mx-[16px] pc:ml-[80px] pc:px-[60px] pc:pb-[40px] pc:block ">
            <div className="border-y-[1px] border-solid border-purple-stroke">
                <TitleFooter />
                <div className="mb-[16px] flex pc:items-baseline pb-0 pc:mb-[28px] justify-between">
                    <MenuFooter />
                    <div className="flex flex-col justify-between items-center pc:flex-row pc:gap-[92px] pc:items-baseline">
                        <BuyMeCoffeeLink />
                        <div className="flex w-[48px] h-[48px] justify-center pc:w-auto">
                            <SharePopover
                                className="absolute -top-3 right-4"
                                trigerShowShareText={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-0 mt-[20px] pc:mt-[18.5px] pc:flex-row-reverse pc:justify-between">
                <PrivacyPolicy />
                <Copyright />
            </div>
        </footer>
    );
};
