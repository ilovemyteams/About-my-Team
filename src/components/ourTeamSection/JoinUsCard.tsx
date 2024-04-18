import { useTranslations } from "next-intl";
import { NoImageHeart } from "../shared/NoImageHeart";

export const JoinUsCard = () => {
    const getTranslation = useTranslations("OurTeam");

    return (
        <div
            className="min-w-[128px] py-10 px-[8.5px] flex flex-col items-center gap-12 
        tab:border-1 tab:border-purple-stroke tab:min-w-[250px] tab:aspect-[250/270] tab:px-12 "
        >
            <p className="text-baseb text-center">
                {getTranslation("yourPhoto")}
            </p>

            <NoImageHeart className="w-[35%] h-auto" />
        </div>
    );
};
