import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";

export const HeroInfo = () => {
    const getTranslation = useTranslations("Buttons");

    return (
        <div className="w-[50%] pt-6">
            {/* TODO: Change when text is avalible */}
            <p className="max-w-[450px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                cum, ullam ratione nihil minus aperiam dicta. Maxime quod odio
                repudiandae hic sunt ab, exercitationem totam, expedita animi
                similique, a perspiciatis.
            </p>
            <div className="flex flex-col gap-6 mt-[96px]">
                <Button>{getTranslation("joinUs")}</Button>
                <Button>{getTranslation("order")}</Button>
            </div>
        </div>
    );
};
