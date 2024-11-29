interface LayoutTitleProps {
    text: string;
    className?: string;
}

export const LayoutTitle = ({ text, className }: LayoutTitleProps) => {
    return (
        <h2
            className={`font-caviar text-purple-200 dark:text-white-200 text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-10 tab:mb-[64px] pc:mb-[80px] ${className}`}
        >
            {text}
        </h2>
    );
};
