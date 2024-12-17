import { IconFireworkSmall } from "../shared/Icons/IconFireworkSmall";
import { PageSection } from "../shared/PageSection";
import { ColoredText } from "./shared/ColoredText";

export const ChristmasText = () => {
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] pc:pb-[160px] desk:pb-[180px] ">
            <div className="relative">
                <ColoredText
                    propName={"text"}
                    className="font-caviar text-xl pc:text-4xl42 desk:text-5xl font-bold tab:max-w-[74%] pc:max-w-[84.4%] tab:mx-auto"
                />
                <IconFireworkSmall
                    className="absolute bottom-[-100px] right-0 w-[136px] tab:bottom-[-115px]  pc:bottom-[-220px]  pc:right-[8%]
                tab:w-[163px] pc:w-[230px] h-auto"
                />
            </div>
        </PageSection>
    );
};
