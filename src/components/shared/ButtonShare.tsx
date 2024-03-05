interface ButtonShareProps {
    children: string;
    className?: string;
}

export const ButtonShare = ({ children, className }: ButtonShareProps) => {
    return (
        <button
            type="button"
            className={`float-right h-[25px] justify-end items-end my-[8px] underline ${className}`}
        >
            {children}
        </button>
    );
};
