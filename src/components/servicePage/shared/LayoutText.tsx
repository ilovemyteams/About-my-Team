interface LayoutTitleProps {
    text: string;
    className?: string;
}

export const LayoutText = ({ text, className }: LayoutTitleProps) => {
    return (
        <p className={`text-sm20 tab:text-base23 desk:text-lg25 ${className}`}>
            {text}
        </p>
    );
};
