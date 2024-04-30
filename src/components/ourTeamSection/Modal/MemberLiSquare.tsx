export const MemberLiSquare = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center mb-2 tab:mb-[6px]">
            <div className="w-2 h-2 border-red border-[2px] mr-2"></div>
            <span className="font-caviar text-sm tab:text-base font-bold text-white ">
                {text}
            </span>
        </div>
    );
};
