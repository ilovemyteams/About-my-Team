import { useLocale } from "next-intl";

import { loadFooter } from "@/sanity/utils/loadQuery";

import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { SharePopover } from "../shared/SharePopover";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter";

export default async function Footer() {
    const locale = useLocale();
    const footerQuery = await loadFooter(locale);

    const selectedLink = footerQuery.data?.privacyPolicyURL || "";
    const policyTitle =
        footerQuery.data?.privacyPolicyTitle || "You forgot title";
    const copyright =
        footerQuery.data?.rightsReserved || "You forgot copyright";
    const footerTitle = footerQuery.data?.title;
    const targetBlank = footerQuery.data?.privacyPolicyNewWindow || true;

    const menuList = footerQuery.data?.navigationMenu
        ? footerQuery.data.navigationMenu
        : [];

    return (
        <footer
            className="relative container pb-5 tab:pb-[40px] pc:m-0 pc:max-w-full pc:pl-[140px] max-w-[540px] tab:max-w-full
         desk:max-w-[1456px] desk:mx-auto desk:left-[40px] desk:pl-[60px] deskxl:left-[60px]"
        >
            <div className="border-y-[1px] border-solid dark:border-purple-stroke border-purple-strokeLight desk:mx-auto">
                <TitleFooter title={footerTitle || null} />
                <SharePopover
                    className="absolute top-[90px] tab:top-[64px] pc:top-[82px] right-[16px] pc:right-[60px] deskxl:top-[129px]"
                    trigerShowShareText={true}
                />
                <div className="flex tab:items-end tab:h-[48px] mb-9 pc:mb-[28px] justify-between">
                    <MenuFooter menuList={menuList} />
                    <div className="flex items-end pc:flex-row ">
                        <BuyMeCoffeeLink />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-[20px] tab:flex-row-reverse tab:justify-between tab:mt-[16px] pc:mt-[16px] pc:pb-0 pc:flex-row-reverse pc:justify-between">
                <PrivacyPolicy
                    selectedLink={selectedLink}
                    policyTitle={policyTitle}
                    targetBlank={targetBlank}
                />
                <Copyright copyright={copyright} />
            </div>
        </footer>
    );
}
