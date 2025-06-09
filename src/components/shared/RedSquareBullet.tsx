export const RedSquareBullet = ({
    differentSizes,
    differentBorder,
    classNames = "",
}: {
    differentSizes?: boolean;
    differentBorder?: boolean;
    classNames?: string;
}) => {
    return (
        <div
            className={`${differentBorder ? "border-[2px] tab:border-[3px]" : "border-[3px]"} shrink-0 dark:border-red border-redLight ${differentSizes ? "w-3 h-3 tab:w-[18px] tab:h-[18px]" : "w-[18px] h-[18px]"} ${classNames}`}
        ></div>
    );
};
