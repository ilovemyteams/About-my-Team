export const ItemNumber = ({ itemNumber }: { itemNumber?: number }) => {
    return (
        <div
            className="absolute bottom-0 right-2 font-caviar font-bold  text-purple-dark text-[140px] leading-[140px]
                       pc:text-[240px] pc:leading-[220px] z-[-1]"
        >
            {itemNumber}
        </div>
    );
};
