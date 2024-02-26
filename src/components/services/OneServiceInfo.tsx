interface OneServiceInfoProps {
    children: string;
    title?: string;
}
export const OneServiceInfo = ({ children, title }: OneServiceInfoProps) => {
    return (
        <div className="flex flex-col justify-between h-[270px] px-4 py-6">
            <div className="flex gap-2">
                <div className="w-6 h-6 bg-purple-100"></div>
                <h3>{title}</h3>
            </div>
            <div className="font-geist cursor-pointer line-clamp-3 hover:line-clamp-none">
                {children}
            </div>
        </div>
    );
};
