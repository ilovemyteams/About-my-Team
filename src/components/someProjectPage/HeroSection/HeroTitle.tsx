import { highlightPurple } from "@/src/utils/highlightingPurple";

export const HeroTitle = ({ title }: { title: string }) => {
    const highlightedTitle = highlightPurple(title);

    return (
        <h1 className="font-caviar text-3xl28 tab:text-4xl font-bold text-purple-200 dark:text-grey mb-6 tab:mb-7 pc:text-6xl pc:mb-[68px] desk:text-7xl">
            {highlightedTitle.map((part, index) => {
                if (part.decoration === "purple") {
                    return (
                        <span key={index} className="text-purple-100">
                            {part.text}
                        </span>
                    );
                }
                return <span key={index}> {part.text}</span>;
            })}
        </h1>
    );
};
