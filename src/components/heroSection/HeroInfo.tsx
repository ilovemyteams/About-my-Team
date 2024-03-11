import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";

export const HeroInfo = () => {
    const getTranslation = useTranslations();

    return (
        <div className="w-[50%] pt-6">
            <p className="max-w-[450px] pc:h-[100px] pc:mb-[96px]">
                {getTranslation("Hero.heroInfoText")}
            </p>
            <div className="flex flex-col gap-6 mt-[96px]">
                <Button>{getTranslation("Buttons.order")}</Button>
                <Button color="grey">{getTranslation("Buttons.joinUs")}</Button>
            </div>
        </div>
    );
};
