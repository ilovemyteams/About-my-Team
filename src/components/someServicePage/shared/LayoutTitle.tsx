import { AnimatedLayoutTitle } from "./AnimatedLayoutTitle";
interface LayoutTitleProps {
    text: string;
    className?: string;
}

export const LayoutTitle = ({ text, className }: LayoutTitleProps) => {
    return (
        <h2
            className={`relative font-caviar text-purple-200 dark:text-white-200 text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-10 tab:mb-[64px] pc:mb-[80px] ${className}`}
        >
            <span className="text-transparent">{text}</span>
            <AnimatedLayoutTitle text={text} />
        </h2>
    );
};
