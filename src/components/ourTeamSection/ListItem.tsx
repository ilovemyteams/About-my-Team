interface ListItemProps {
    children: string;
}

export const ListItem = ({ children }: ListItemProps) => {
    return (
        <div className="p-[6px">
            <li className=" h-[20px] tab:h-[32px] tab:w-64 tab:py-0.5 px-0 leading-6 tracking-normal text-left">
                <p className="p-[6px] text-baseb font-bold  text-grey font-caviar">
                    {children}
                </p>
            </li>
        </div>
    );
};
