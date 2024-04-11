import { useTranslations } from "next-intl";
import { NoImageHeart } from "../shared/NoImageHeart";

export const JoinUsCard = () => {
    const getTranslation = useTranslations("OurTeam");

    return (
        <div className="min-w-[128px]  py-10 px-[8.5px] flex flex-col items-center gap-12">
            <p className="text-xlb text-center">
                {getTranslation("yourPhoto")}
            </p>
            <NoImageHeart className="w-[35%] h-auto" />
        </div>
    );
};
