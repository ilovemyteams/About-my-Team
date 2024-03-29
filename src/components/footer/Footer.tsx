import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { SharePopover } from "../shared/SharePopover";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter/TitleFooter";

export const Footer = () => {
    return (
        <footer className="relative pb-5 px-[16px] w-auto tab:px-[24px] pc:ml-[80px] pc:px-[60px] tab:pb-[40px] deskxl:ml-[120px] ">
            <div className="border-y-[1px] border-solid border-purple-stroke">
                <TitleFooter />
                <SharePopover className="absolute tab:hidden pc:flex top-[88px] pc:top-[100px] right-0 pc:right-[60px] deskxl:top-[141px]" />
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
