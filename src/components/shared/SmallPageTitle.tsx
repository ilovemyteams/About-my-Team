import Cookies from "js-cookie";

interface SmallPageTitleProps {
    children: string;
    className?: string;
}

export const SmallPageTitle = ({
    children,
    className,
}: SmallPageTitleProps) => {
    if (typeof children !== "string") {
        return null;
    }

    const uppercaseChildren = children.toUpperCase();

    const userTheme = Cookies.get("theme") || { value: "dark" };

    return (
        <span
            className={`inline-block font-normal font-geist mb-2 tab:mb-0 text-sm ${
                userTheme === "dark" ? "text-red" : "text-redLight"
            } ${className} `}
        >
            {uppercaseChildren}
        </span>
    );
};
