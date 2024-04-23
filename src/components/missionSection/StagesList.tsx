import { useTranslations } from "next-intl";

export const StagesList = () => {
    const getTranslation = useTranslations("Mission");
    const stagesList = [
        getTranslation("consultations"),
        getTranslation("planning"),
        getTranslation("development"),
        getTranslation("promotion"),
        getTranslation("maintenance"),
    ];
    return (
        <ul className="flex flex-wrap gap-x-16 gap-y-3 justify-around tab:gap-0 tab:justify-between mt-[40px] tab:mt-[56px] pc:mt-[46px]">
            {stagesList.map((stage, idx) => (
                <li className="min-w-[100px]" key={idx}>
                    <span className="text-sm dark:text-purple-50 text-purple-130">
                        {stage.toUpperCase()}
                    </span>
                </li>
            ))}
        </ul>
    );
};
