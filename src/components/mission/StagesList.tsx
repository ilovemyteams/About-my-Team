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
        <ul className="flex justify-between mt-[80px]">
            {stagesList.map((stage, idx) => (
                <li key={idx}>
                    <span className="text-sm text-purple-50">
                        {stage.toUpperCase()}
                    </span>
                </li>
            ))}
        </ul>
    );
};
