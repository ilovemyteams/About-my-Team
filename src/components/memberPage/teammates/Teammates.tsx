import { getTranslations } from "next-intl/server";

import { Project } from "@/types/Projects";

import { TitleBig } from "../shared/TitleBig";
import { TeammatesCardList } from "./TeammatesCardList";
import { TeammatesMobSlider } from "./TeammatesMobSlider";

interface TeammatesProps {
    projects: Project[];
    id: string;
}

export const Teammates = async ({ projects, id }: TeammatesProps) => {
    const t = await getTranslations("MemberPage");
    return (
        <section>
            <TitleBig>{t("teammates")}</TitleBig>
            <div className="hidden pc:block">
                <TeammatesCardList projects={projects} id={id} />
            </div>
            <div className="pc:hidden">
                <TeammatesMobSlider projects={projects} id={id} />
            </div>
        </section>
    );
};
