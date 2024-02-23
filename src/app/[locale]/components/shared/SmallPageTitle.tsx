export const SmallPageTitle = ({ children }: { children: string }) => {
    if (typeof children !== "string") {
        return null;
    }

    const uppercaseChildren = children.toUpperCase();

    return (
        <span className="font-geist text-sm text-purple-50">
            {uppercaseChildren}
        </span>
    );
};
