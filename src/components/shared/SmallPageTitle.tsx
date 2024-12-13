interface SmallPageTitleProps {
    children: string;
    isBigTitle?: boolean;
    className?: string;
}

export const SmallPageTitle = ({
    children,
    isBigTitle = false,
    className,
}: SmallPageTitleProps) => {
    if (typeof children !== "string") {
        return null;
    }

    const uppercaseChildren = children.toUpperCase();

    return (
        <span
            className={`block font-normal font-geist px-[4px] py-[2px] mb-2 tab:mb-0 tab:mt-[6px] tab:mr-[12px] pc:mt-[12px] text-sm dark:text-red text-redLight ${isBigTitle ? "pc:mb-[60px]" : ""} ${className} `}
        >
            {uppercaseChildren}
        </span>
    );
};
