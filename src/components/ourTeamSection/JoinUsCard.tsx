import { useTranslations } from "next-intl";
import { NoImageHeart } from "../shared/NoImageHeart";

interface BorderProp {
    pcBorderJoinUs?: number;
    tabBorderJoinUs?: number;
}

export const JoinUsCard = ({ pcBorderJoinUs, tabBorderJoinUs }: BorderProp) => {
    const getTranslation = useTranslations("OurTeam");
    let borderRightPC = "";
    let borderBottomPC = "";
    let borderRightTab = "";
    let borderBottomTab = "";
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
            borderRightPC = "pc:border-r-0";
        }
        if (pcBorderJoinUs > 3) {
            borderBottomPC = "pc:border-b-0";
        }
    } else {
        null;
    }

    return (
        <div
            className={`min-w-[128px] py-10 px-[8.5px] flex flex-col items-center gap-12 
        tab:border-1 tab:border-purple-stroke tab:min-w-[250px] tab:aspect-[250/270] tab:px-12 tab:border-l-0 tab:border-t-0 
        ${borderRightPC} ${borderBottomPC} ${borderRightTab} ${borderBottomTab} `}
        >
            <p className="text-baseb text-center">
                {getTranslation("yourPhoto")}
            </p>

            <NoImageHeart className="w-[35%] h-auto" />
        </div>
    );
};
