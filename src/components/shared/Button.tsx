import { twMerge } from "tailwind-merge";
interface ButtonProps {
    children: string;
    color?: "red" | "grey";
    className?: string;
    type?: "submit" | "button";
    disabled?: boolean;
    onClick?: () => void;
    cookie?: boolean;
    size?: "small" | "big";
}

export const Button = ({
    children,
    color = "red",
    className,
    type = "button",
    disabled = false,
    onClick,
    cookie,
    size = "big",
}: ButtonProps) => {
    const redColor =
        "dark:text-red dark:border-red dark:after:bg-red dark:before:bg-red text-redLight border-redLight after:bg-redLight before:bg-redLight";
    const greyColor =
        "dark:text-grey dark:border-grey dark:after:bg-grey dark:before:bg-grey text-greyLight border-greyLight after:bg-greyLight before:bg-greyLight";
    return (
        <button
            aria-label="contact button"
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={twMerge(
                "group relative min-h-[48px] h-[48px] font-caviar font-bold border-solid border-y-[1px] pc:hover:after:transition-opacity pc:hover:after:duration-200 pc:hover:after:ease-out pc:hover:before:transition-opacity pc:hover:before:duration-200 pc:hover:before:ease-out after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:h-[0.8px] after:w-full after:opacity-0 before:content-[''] before:absolute before:bottom-[5px] before:left-0 before:h-[0.8px] before:w-full before:opacity-0 enabled:pc:hover:after:opacity-100 enabled:pc:hover:before:opacity-100 pc:hover:before:delay-[400ms] pc:focus:before:opacity-100 pc:focus:after:opacity-0 focus:outline-none focus-within:outline-none enabled:active:before:opacity-100 disabled:border-disabledLight disabled:text-disabledLight dark:disabled:border-purple-stroke dark:disabled:text-purple-stroke",
                color === "red" ? redColor : greyColor,
                cookie
                    ? "min-w-[136px] w-full max-w-[288px]"
                    : "w-[288px] tab:w-[270px]",
                size === "big"
                    ? "min-h-[48px] h-[48px] tab:h-[56px] text-xlb tab:text-2xl"
                    : "min-h-[44px] h-[44px] tab:h-[48px] text-lg ",
                className
            )}
        >
            <span className="inline-block transform enabled:pc:group-hover:translate-y-[-12%] enabled:pc:group-focus:translate-y-[0%] transition duration-[600ms] ease-out">
                {children.toLowerCase()}
            </span>
        </button>
    );
};
