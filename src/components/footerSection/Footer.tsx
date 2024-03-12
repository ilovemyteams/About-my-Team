import { ButtonShare } from "../shared/ButtonShare";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter/TitleFooter";

export const Footer = () => {
    return (
        <footer id="footer" className="container pc:mb-[40px]">
            <div className="border-y-[1px] border-solid border-purple-stroke">
                <TitleFooter />
                <div className="flex items-baseline pb-0 mb-[28px] justify-between">
                    <MenuFooter />
                    <div className="flex gap-[105px] items-baseline">
                        <BuyMeCoffeeLink />
                        <ButtonShare />
                    </div>
                </div>
            </div>
            <div className="flex mt-[18.5px] justify-between">
                <Copyright />
                <PrivacyPolicy />
            </div>
        </footer>
    );
};
