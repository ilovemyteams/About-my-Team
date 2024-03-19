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
            className={`group ${color === "red" ? redColor : greyColor} relative w-[288px] min-h-[48px] h-[48px] tab:w-[270px] tab:h-[56px] font-caviar text-xlb tab:text-2xl border-solid border-y-[1px]
            pc:hover:after:transition-opacity pc:hover:after:duration-200 pc:hover:after:ease-out pc:hover:before:transition-opacity pc:hover:before:duration-200 pc:hover:before:ease-out after:content-[''] after:absolute after:bottom-[2px] 
             after:left-0 after:h-[0.8px] after:w-full after:opacity-0 before:content-[''] before:absolute before:bottom-[5px] before:left-0 before:h-[0.8px] before:w-full
             before:opacity-0 pc:hover:after:opacity-100 pc:hover:before:opacity-100 pc:hover:before:delay-[400ms] focus:before:opacity-100 focus:after:opacity-0 focus:outline-none focus-within:outline-none ${className}`}
        >
            <span className="inline-block transform pc:group-hover:translate-y-[-12%] pc:group-focus:translate-y-[0%] transition duration-[600ms] ease-out">
                {children.toLowerCase()}
            </span>
        </button>
    );
};
