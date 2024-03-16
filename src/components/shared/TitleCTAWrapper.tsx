interface TitleCTAWrapperProps {
    children: string;
    className?: string;
}

export const TitleCTAWrapper = ({
    children,
    className,
}: TitleCTAWrapperProps) => {
    return (
        <h2 className={`font-caviar text-2xl pc:text-5xl ${className}`}>
            {children}
        </h2>
    );
};
