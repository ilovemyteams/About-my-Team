interface LayoutTitleProps {
    text: string;
    className?: string;
}

export const LayoutSubtitle = ({ text, className }: LayoutTitleProps) => {
    return (
        <h3
            className={`font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-3xl mb-4 pc:mb-6 ${className}`}
        >
            {text}
        </h3>
    );
};
