import Image from "next/image";
import { useTranslations } from "next-intl";

import { PageSection } from "../../shared/PageSection";
import { Balloon } from "./Balloon";

export const SecondScene = () => {
    const getTranslation = useTranslations("Valentine");

    return (
        <PageSection className="pt-3 pb-11">
            <h2 className="font-caviar text-purple-200 font-bold dark:text-grey text-2xl tab:text-4xl pc:text-5xl desk:text-6xlt">
                {getTranslation("secondSceneTitle")}
            </h2>
            <div className="relative mt-8 h-[397px] w-[288px] mx-auto">
                <Balloon
                    heartPNG="/images/valen/pinkBalloon.png"
                    id="pinkBalloon"
                    className="w-[66.5px] h-auto "
                />

                <Image
                    src="/images/valen/box&ribbons.png"
                    alt="box with balloon's ribbons "
                    width={873}
                    height={1417}
                    className="h-[279px] w-auto absolute bottom-0 left-1/2 -translate-x-1/2 "
                />
            </div>
        </PageSection>
    );
};
