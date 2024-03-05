interface ButtonShareProps {
    children: string;
    className?: string;
}

export const ButtonShare = ({ children, className }: ButtonShareProps) => {
    return (
        <button
            type="button"
            className={`h-[25px] justify-end items-end my-[8px] border-b-[1px] ${className}`}
        >
            {children}
        </button>
    );
};
