import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";

export const HeroInfo = () => {
    const getTranslation = useTranslations();

    return (
        <div className="flex flex-col items-center pt-4 tab:pt-0 pc:block pc:w-[50%] pc:pt-6">
            <p
                className="text-xl max-w-[450px] pc:mb-[154px] pc:static
                           tab:absolute tab:left-0 tab:top-0"
            >
                {getTranslation("Hero.heroInfoText")}
            </p>
            <div className="flex flex-col gap-4 tab:mt-[86px] pc:gap-6 mt-8 pc:mt-[96px]">
                <Button>{getTranslation("Buttons.order")}</Button>
                <Button color="grey">{getTranslation("Buttons.joinUs")}</Button>
            </div>
        </div>
    );
};
