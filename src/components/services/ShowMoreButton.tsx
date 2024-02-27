import { useTranslations } from "next-intl";

interface ShowMoreButtonProps {
    toggleShowMore: () => void;
    isSwownMore: boolean;
}
export const ShowMoreButton = ({
    toggleShowMore,
    isSwownMore,
}: ShowMoreButtonProps) => {
    const getTranslation = useTranslations("Services");

    return (
        <button
            onClick={toggleShowMore}
            className="text-start text-purple-100 underline  decoration-solid pc:hidden"
        >
            {!isSwownMore
                ? getTranslation("showMore")
                : getTranslation("showLess")}
        </button>
    );
};
