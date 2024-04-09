import { useTranslations } from "next-intl";
import { NoImageHeart } from "../shared/NoImageHeart";

export const JoinUsCard = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <div
            className="min-w-[288px] aspect-[288/240] py-10 px-[8.5px] flex flex-col items-center gap-12
                       border-[1px] border-purple-stroke "
        >
            <p className="text-xlb px-4 text-center">
                {getTranslation("yourPhoto")}
            </p>
            <NoImageHeart className="w-[35%] h-auto" />
        </div>
    );
};
