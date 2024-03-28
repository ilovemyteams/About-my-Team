import { TeamsList } from "./TeamsList";
import { CategoriesList } from "./CategoriesList";

export const MenuTeamSection = () => {
    return (
        <div className="hidden tab:block tab:relative tab:border-[1px] tab:border-purple-stroke tab:p-[16px]">
            <TeamsList />
            <CategoriesList />
        </div>
    );
};
