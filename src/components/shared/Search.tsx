import { useTranslations } from "next-intl";

import { IconSearch } from "./Icons/IconSearch";

export const Search = () => {
    const getTranslations = useTranslations("Buttons");
    // TODO
    return (
        <div className="flex border-b-1 tab:border-none">
            <IconSearch />
            <p className="my-auto font-caviar text-sm tab:text-lg text-purple-200 dark:text-grey">
                {getTranslations("search")}
            </p>
        </div>
    );
};

export default Search;
