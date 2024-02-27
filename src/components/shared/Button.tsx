interface ButtonProps {
    children: string;
    className?: string;
}
export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`w-[258px] h-[56px] font-caviar text-2xl text-purple-200 bg-purple-100 ${className}`}
        >
            {children}
        </button>
    );
};
