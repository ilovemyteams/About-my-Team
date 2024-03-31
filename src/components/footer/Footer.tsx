import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { SharePopover } from "../shared/SharePopover";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter/TitleFooter";

export const Footer = () => {
    return (
        <footer
            className="relative container pb-5 tab:pb-[40px] pc:m-0 pc:max-w-full pc:pl-[140px] max-w-[540px] tab:max-w-full
         desk:max-w-[1456px] desk:mx-auto desk:left-[40px] desk:pl-[60px] deskxl:left-[60px]"
        >
            <div className="border-y-[1px] border-solid border-purple-stroke desk:mx-auto">
                <TitleFooter />
                <SharePopover className="absolute top-[90px] tab:hidden pc:flex pc:top-[100px] right-[16px] pc:right-[60px] deskxl:top-[141px]" />
                <div className="mb-[16px] flex tab:items-end tab:h-[48px] tab:mb-[24px] pc:mb-[28px] justify-between">
                    <MenuFooter />
                    <div className="flex items-end pc:flex-row ">
                        <BuyMeCoffeeLink />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-[20px] tab:flex-row-reverse tab:justify-between tab:mt-[16px] pc:mt-[16px] pc:pb-0 pc:flex-row-reverse pc:justify-between">
                <PrivacyPolicy />
                <Copyright />
            </div>
        </footer>
    );
};
