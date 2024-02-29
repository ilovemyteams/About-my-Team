interface SmallPageTitleProps {
    children: string;
    className?: string;
}

export const SmallPageTitle = ({
    children,
    className,
}: SmallPageTitleProps) => {
    if (typeof children !== "string") {
        return null;
    }

    const uppercaseChildren = children.toUpperCase();

    return (
        <span
            className={`inline-block mb-2 tab:mb-0 text-sm text-purple-50 ${className} `}
        >
            {uppercaseChildren}
        </span>
    );
};
