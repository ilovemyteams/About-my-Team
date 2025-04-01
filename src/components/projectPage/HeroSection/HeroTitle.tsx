import { highlightPurple } from "@/src/utils/highlightingPurple";

export const HeroTitle = ({ title }: { title: string }) => {
    const highlightedTitle = highlightPurple(title);

    return (
        <h1 className="font-caviar text-3xl28 font-bold text-purple-200 dark:text-grey mb-6">
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
