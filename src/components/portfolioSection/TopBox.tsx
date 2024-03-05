export interface BoxProps {
    children: string;
    className?: string;
}

export const TopBox = ({ children, className }: BoxProps) => {
    return (
        <div
            className={`inline-block bg-white px-3 py-1 text-lg text-grey font-caviar border rounded border-grey ${className} `}
        >
            {children}
        </div>
    );
};
