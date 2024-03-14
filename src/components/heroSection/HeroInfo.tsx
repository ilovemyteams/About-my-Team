import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";

export const HeroInfo = () => {
    const getTranslation = useTranslations();

    return (
        <div className="flex flex-col items-center pt-4 pc:block pc:w-[50%] pc:pt-6">
            <p className="text-xl max-w-[450px] pc:mb-[154px]">
                {getTranslation("Hero.heroInfoText")}
            </p>
            <div className="flex flex-col gap-4 pc:gap-6 mt-8 pc:mt-[96px]">
                <Button>{getTranslation("Buttons.order")}</Button>
                <Button color="grey">{getTranslation("Buttons.joinUs")}</Button>
            </div>
        </div>
    );
};
