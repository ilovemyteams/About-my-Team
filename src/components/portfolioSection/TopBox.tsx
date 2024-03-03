interface TopBoxProps {
    children: string;
    className?: string;
}

export const TopBox = ({ children, className }: TopBoxProps) => {
    return (
        <div
            className={`inline-block bg-white px-3 py-1 text-lg text-grey border rounded border-grey ${className} `}
        >
            {children}
        </div>
    );
};
