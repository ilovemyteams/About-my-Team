import { useTranslations } from "next-intl";

import { normalizeGoogleDriveImgUrls } from "@/src/utils/normalizeGoogleDriveImgUrls";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

const IMAGE = normalizeGoogleDriveImgUrls(
    "https://drive.google.com/file/d/1ThWQ10FdymqFnc0ELdC_O4892o-eaK9m/view?usp=drive_link"
);

export const QaCardList = () => {
    //current version of this component
    //is for testing purposes only
    const getTranslation = useTranslations("Q&A");
    const ITER: number[] = [1, 2, 3, 4, 5];

    return (
        <Section className="flex flex-col gap-3">
            {ITER.map(i => (
                <QaCard
                    key={i}
                    data={{ id: i, image: IMAGE, likes: i }}
                    localizationData={{
                        questionText: getTranslation(`question${i}`),
                        answerText: getTranslation(`answer${i}`),
                        imageAltText: "Illustration",
                    }}
                />
            ))}
        </Section>
    );
};
