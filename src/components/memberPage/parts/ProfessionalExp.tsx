import { getTranslations } from "next-intl/server";

import { ProfessionalExperience } from "@/src/mockedData/membersData";

import { TitleBig } from "../shared/TitleBig";
import { ProjectExperience } from "./ProjectExperience";
interface ProfessionalExperienceProps {
    professionalExperience: ProfessionalExperience[];
}

export const ProfessionalExp = async ({
    professionalExperience,
}: ProfessionalExperienceProps) => {
    const t = await getTranslations("MemberPage");

    return (
        <section>
            <TitleBig>{t("profExp")}</TitleBig>
            <ul
                className={`
                    relative flex flex-col gap-4 tab:gap-5 desk:gap-6 pl-4
                    before:absolute before:top-[12px] before:left-0 before:content-[''] before:w-[1px] before:h-[calc(100%-16px)] before:bg-purple-strokeLight dark:before:bg-purple-stroke`}
            >
                {professionalExperience.map((i, idx) => (
                    <li key={idx} className="font-normal">
                        <p
                            className={`
                                relative font-caviar text-sm font-bold tab:text-lg pc:text-xl desk:text-2xl text-purple-200 dark:text-white-200 mb-1 desk:mb-2
                                before:absolute before:content-['♦'] before:text-[14px] before:text-purple-strokeLight before:dark:text-purple-stroke before:left-[-19px]`}
                        >
                            {i.role}
                        </p>
                        <p className="text-xs tab:text-sm desk:text-base mb-1 desk:mb-2 text-redLight dark:text-red">
                            {i.name}
                        </p>

                        <ProjectExperience
                            startDate={i.startDate}
                            endDate={i.endDate}
                        />

                        <p className="text-sm font-normal tab:text-base23 desk:text-lg desk:font-normal">
                            {i.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
