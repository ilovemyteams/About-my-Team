"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IconGoBack } from "./Icons/IconGoBack";

interface PaginationProps {
    total: number;
    currentPage: number;
}

const PAGE_KEY = "page";

export const Pagination = ({ total, currentPage }: PaginationProps) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set(PAGE_KEY, page.toString());
        router.push(`${pathName}?${params.toString()}`);
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (total <= 5) {
            for (let i = 1; i <= total; i++) pages.push(i);
            return pages;
        }

        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, "…");
        } else if (currentPage >= total - 2) {
            pages.push("…", total - 3, total - 2, total - 1, total);
        } else {
            pages.push("…", currentPage - 1, currentPage, currentPage + 1, "…");
        }

        return pages;
    };

    const pages = getPageNumbers();

    const buttonArrowStyle =
        "flex justify-center items-center w-12 h-12 relative shadow-none text-redLight dark:text-red border-t border-b border-redLight dark:border-red  bg-transparent rounded-none  enabled:icon-hover-rounded-purple disabled:dark:text-purple-stroke disabled:dark:border-purple-stroke disabled:border-disabledLight  disabled:text-disabledLight active:bg-transparent";

    return (
        <div className="flex items-center justify-center gap-2 mb-[80px] tab:mb-[100px] pc:mb-[100px] desk:mb-[120px]">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={buttonArrowStyle}
            >
                <IconGoBack className="w-7 h-8" />
            </button>

            {pages.map((p, i) =>
                p === "…" ? (
                    <span
                        key={i}
                        className="w-7 h-7 flex items-center justify-center text-greyLight dark:text-grey"
                    >
                        …
                    </span>
                ) : (
                    <button
                        key={i}
                        onClick={() => handlePageChange(p as number)}
                        className={`min-w-7 w-7 h-7 font-bold ${
                            p === currentPage
                                ? "text-redLight dark:text-red border-b-2 border-redLight dark:border-red"
                                : "text-greyLight dark:text-grey hover:text-redLight dark:hover:text-red"
                        }`}
                    >
                        {p}
                    </button>
                )
            )}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === total}
                className={buttonArrowStyle}
            >
                <IconGoBack className="rotate-180 w-7 h-8" />
            </button>
        </div>
    );
};
