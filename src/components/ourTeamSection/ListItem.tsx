interface ListItemProps {
    children: string;
}

export const ListItem = ({ children }: ListItemProps) => {
    return (
        <div className="p-[6px">
            <li className="p-[6px] h-[32px] w-64 py-0.5 px-0 leading-6 tracking-normal text-left">
                <p className="text-baseb font-bold  text-grey font-caviar">
                    {children}
                </p>
            </li>
        </div>
    );
};
