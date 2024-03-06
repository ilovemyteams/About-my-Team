interface ButtonProps {
    children: string;
    color?: "red" | "grey";
    className?: string;
}
const redColor = "text-red border-red after:bg-red before:bg-red";
const greyColor = "text-grey border-grey after:bg-grey before:bg-grey";

export const Button = ({ children, color = "red", className }: ButtonProps) => {
    return (
        <button
            className={`${color === "red" ? redColor : greyColor} relative w-[270px] h-[56px] font-caviar text-2xl border-solid border-y-[1px]
            hover:after:transition-opacity hover:after:duration-500 hover:after:ease-out hover:before:transition-opacity hover:before:duration-500 hover:before:ease-out after:content-[''] after:absolute after:bottom-[2px] 
             after:left-0 after:h-[1px] after:w-[270px] after:opacity-0 
             before:content-[''] before:absolute before:bottom-[5px] before:left-0 before:h-[1px] before:w-[270px]
             before:opacity-0 hover:after:opacity-100 hover:before:opacity-100 hover:before:delay-700 focus:before:opacity-100 focus:after:opacity-0 focus:outline-none focus-within:outline-none ${className}`}
        >
            {children.toLowerCase()}
        </button>
    );
};
