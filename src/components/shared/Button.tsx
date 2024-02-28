interface ButtonProps {
    children: string;
}
export const Button = ({ children }: ButtonProps) => {
    return (
        <button className="w-[258px] h-[56px] text-black bg-purple-stroke">
            {children}
        </button>
    );
};
