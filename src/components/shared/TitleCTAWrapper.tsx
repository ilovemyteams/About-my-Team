interface TitleCTAWrapperProps {
    children: string;
    className?: string;
}

export const TitleCTAWrapper = ({
    children,
    className,
}: TitleCTAWrapperProps) => {
    return (
        <h2
            className={`font-caviar text-2xlb tab:text-3xl pc:text-5xl desk:text-6xl text-center tab:text-left text-purple-200 dark:text-grey ${className}`}
        >
            {children}
        </h2>
    );
};
