import { useTranslations } from "next-intl";

import { Button } from "../../shared/Button";
import { onClickBtnToWinForm } from "../ChristmasHero/WinLandingBtn";

export const ChristmasCtaBtn = () => {
    const getTranslation = useTranslations("Christmas");

    return (
        <Button onClick={onClickBtnToWinForm}>
            {getTranslation("ctaBtn")}
        </Button>
    );
};
