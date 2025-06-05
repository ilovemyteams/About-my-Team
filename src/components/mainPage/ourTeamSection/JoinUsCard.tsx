import { useTranslations } from "next-intl";

import { NoImageHeart } from "../../shared/NoImageHeart";

interface BorderProp {
    pcBorderJoinUs?: number;
    tabBorderJoinUs?: number;
    deskXLBorderJoinUs?: number;
}

export const JoinUsCard = ({
    pcBorderJoinUs,
    tabBorderJoinUs,
    deskXLBorderJoinUs,
}: BorderProp) => {
    const getTranslation = useTranslations("OurTeam");
    let borderRightPC = "";
    let borderBottomPC = "";
    let borderRightTab = "";
    let borderBottomTab = "";
    let borderRightDeskXL = "";
    let borderBottomDeskXL = "";
    if (tabBorderJoinUs) {
        if (tabBorderJoinUs === 1 || tabBorderJoinUs === 3) {
            borderRightTab = "tab:border-r-0 pc:border-r";
        }
        if (tabBorderJoinUs > 1) {
            borderBottomTab = "tab:border-b-0 pc:border-b";
        }
    } else {
        null;
    }
    if (pcBorderJoinUs) {
        if (pcBorderJoinUs === 2 || pcBorderJoinUs === 5) {
            borderRightPC = "pc:border-r-0 deskxl:border-r";
        }
        if (pcBorderJoinUs > 3) {
            borderBottomPC = "pc:border-b-0 deskxl:border-b";
        }
    } else {
        null;
    }
    if (deskXLBorderJoinUs) {
        if (deskXLBorderJoinUs === 3 || deskXLBorderJoinUs === 7) {
            borderRightDeskXL = "deskxl:border-r-0";
        }
        if (deskXLBorderJoinUs > 4) {
            borderBottomDeskXL = "deskxl:border-b-0";
        }
    } else {
        null;
    }

    return (
        <div
            className={`min-w-[128px] py-10 px-[8.5px] flex flex-col items-center gap-12 
            tab:aspect-[250/270] pc:aspect-[270/292]
        tab:border-1 tab:border-purple-strokeLight dark:tab:border-purple-stroke tab:min-w-[250px]  tab:px-12 tab:border-l-0 tab:border-t-0 
        ${borderRightPC} ${borderBottomPC} ${borderRightTab} ${borderBottomTab} ${borderRightDeskXL} ${borderBottomDeskXL} `}
        >
            <p className="text-xlb font-caviar text-center">
                {getTranslation("yourPhoto")}
            </p>

            <NoImageHeart className="w-[62%] h-auto" />
        </div>
    );
};
