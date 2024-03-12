import { ButtonShare } from "../shared/ButtonShare";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { Section } from "../shared/Section";
import { Copywright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter/TitleFooter";

export const FooterSection = () => {
    return (
        <Section id="footer" className="pc:mb-0">
            <div className="border-y-[1px] border-solid border-purple-stroke">
                <TitleFooter />
                <div className="flex items-baseline pb-0 mb-[28px] justify-between">
                    <MenuFooter />
                    <BuyMeCoffeeLink className="mr-[105px]" />
                    <ButtonShare className="mr-0" />
                </div>
            </div>
            <div className="flex mt-[18.5px] justify-between">
                <Copywright />
                <PrivacyPolicy />
            </div>
        </Section>
    );
};
