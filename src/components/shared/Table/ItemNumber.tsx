export const ItemNumber = ({ itemNumber }: { itemNumber?: number }) => {
    return (
        <div
            className="absolute bottom-[12px] right-1 font-caviar font-bold dark:text-purple-dark text-purple-strokeLight text-[140px] leading-[140px] h-[122px]
            tab:leading-[160px] tab:text-[180px] tab:bottom-[12px] 
            pc:bottom-0  pc:text-[240px] pc:leading-[220px] z-[-1] tab:h-[160px] pc:h-[220px]"
        >
            {itemNumber}
        </div>
    );
};
