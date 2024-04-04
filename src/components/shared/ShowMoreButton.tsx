import { useTranslations } from "next-intl";

interface ShowMoreButtonProps {
    toggleShowMore: () => void;
    isShownMore: boolean;
}
export const ShowMoreButton = ({
    toggleShowMore,
    isShownMore,
}: ShowMoreButtonProps) => {
    const getTranslation = useTranslations("Services");

    return (
        <button
            aria-label="show more button"
            onClick={toggleShowMore}
            className="text-start text-purple-100 underline  decoration-solid tab:hidden"
        >
            {!isShownMore
                ? getTranslation("showMore")
                : getTranslation("showLess")}
        </button>
    );
};
