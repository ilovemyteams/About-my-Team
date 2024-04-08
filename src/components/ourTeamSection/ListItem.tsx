interface ListItemProps {
    children: string;
}

export const ListItem = ({ children }: ListItemProps) => {
    return (
        <li className="p-[6px] h-[20px] tab:h-[32px] tab:w-64 tab:py-0.5 px-0 leading-6 tracking-normal text-left">
            <p className=" text-baseb tab:font-bold  text-grey font-caviar">
                {children}
            </p>
        </li>
    );
};
