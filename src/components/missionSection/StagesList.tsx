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
        <ul className="flex flex-wrap gap-x-16 gap-y-3 justify-around pc:justify-between mt-[40px] pc:mt-[48px]">
            {stagesList.map((stage, idx) => (
                <li className="min-w-[100px]" key={idx}>
                    <span className="text-sm text-purple-50">
                        {stage.toUpperCase()}
                    </span>
                </li>
            ))}
        </ul>
    );
};
