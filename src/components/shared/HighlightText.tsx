import { Fragment } from "react";

type HighlightTextProps = {
    text: string;
    toBeHighlighted: string;
};

export const HighlightText = ({
    text,
    toBeHighlighted,
}: HighlightTextProps) => {
    if (toBeHighlighted && toBeHighlighted.length > 2) {
        const regex = new RegExp(`(${toBeHighlighted})`, "gi");
        const splitted = text.split(regex).filter(part => !regex.test(part));
        const splitters = text.match(regex) || [];

        return (
            <>
                {splitted.map((part, index) => (
                    <Fragment key={index}>
                        {part}
                        {index < splitters.length && (
                            <span className="text-redLight dark:text-red">
                                {splitters[index]}
                            </span>
                        )}
                    </Fragment>
                ))}
            </>
        );
    }

    return <>{text}</>; // Return the original text if the condition is not met
};
