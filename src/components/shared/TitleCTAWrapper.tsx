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
            className={`font-caviar text-2xlb tab:text-3xl pc:text-5xl text-center tab:text-left ${className}`}
        >
            {children}
        </h2>
    );
};
