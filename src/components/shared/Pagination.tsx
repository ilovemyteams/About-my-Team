"use client";
import {
    cn,
    Pagination as NextUIPagination,
    PaginationItemRenderProps,
    PaginationItemType,
} from "@heroui/react";
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
        params.set(PAGE_KEY, `${page.toString()}`);
        router.push(`${pathName}?${params.toString()}`);
    };

    const handleDots = (
        setter: (value: number) => void,
        index: number,
        activePage: number,
        total: number
    ) => {
        const targetPage =
            index === 6
                ? activePage < 5
                    ? 6
                    : activePage + 2
                : activePage > total - 4
                  ? 10
                  : activePage - 2;

        setter(targetPage);
    };

    const buttonArrowStyle =
        "w-12 h-12 relative shadow-none text-redLight dark:text-red border-t border-b border-redLight dark:border-red  bg-transparent rounded-none  enabled:icon-hover-rounded-purple disabled:dark:text-purple-stroke disabled:dark:border-purple-stroke disabled:border-disabledLight  disabled:text-disabledLight active:bg-transparent";
    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
        index,
        activePage,
        total,
    }: PaginationItemRenderProps) => {
        if (value === PaginationItemType.NEXT) {
            return (
                <button
                    key={key}
                    className={cn(className, buttonArrowStyle, "ml-4")}
                    onClick={onNext}
                    aria-label="next page button"
                    disabled={activePage === total}
                >
                    <IconGoBack className="rotate-180 w-7 h-8" />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button
                    key={key}
                    aria-label="prev page button"
                    className={cn(className, buttonArrowStyle, "mr-4")}
                    onClick={onPrevious}
                    disabled={activePage === 1}
                >
                    <IconGoBack className="w-7 h-8" />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return (
                <button
                    key={key}
                    className={cn(
                        className,
                        "shadow-none bg-transparent font-caviar text-base font-bold w-7 h-7 text-greyLight dark:text-grey hover:text-redLight dark:hover:text-red border border-transparent rounded-none"
                    )}
                    onClick={() =>
                        handleDots(setPage, index, activePage, total)
                    }
                >
                    ...
                </button>
            );
        }

        return (
            <button
                key={key}
                ref={ref}
                className={cn(
                    className,
                    "shadow-none bg-transparent font-caviar min-w-7 w-7 h-7 text-greyLight dark:text-grey  border border-transparent  hover:text-redLight dark:hover:text-red  rounded-none text-base font-bold",
                    isActive &&
                        "text-redLight dark:text-red border-b-redLight dark:border-b-red text-base font-bold"
                )}
                onClick={() => setPage(value)}
            >
                {value}
            </button>
        );
    };
    return (
        <NextUIPagination
            onChange={handlePageChange}
            total={total}
            page={currentPage}
            renderItem={renderItem}
            className="p-0 m-0 mb-[80px] tab:mb-[100px] pc:mb-[100px] desk:mb-[120px]"
            classNames={{
                wrapper: "mx-auto gap-2 p-0 mb-0",
                cursor: "hidden",
            }}
            showControls
            loop
        />
    );
};
