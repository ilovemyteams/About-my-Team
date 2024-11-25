"use client";
import {
    cn,
    Pagination as NextUIPagination,
    PaginationItemRenderProps,
    PaginationItemType,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IconGoBack } from "./Icons/IconGoBack";

interface PaginationProps {
    total: number;
    initialPage: number;
}

export const Pagination = ({ total, initialPage }: PaginationProps) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", `${page}`);
        replace(`${pathName}?${params.toString()}`, { scroll: false });
        const element = document.getElementById("item-1");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
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
                    className={cn(
                        className,
                        "w-12 h-12 shadow-none text-redLight dark:text-red border border-transparent border-y-redLight dark:border-y-red bg-transparent rounded-none ml-4"
                    )}
                    onClick={onNext}
                >
                    <IconGoBack className="rotate-180 w-7 h-8" />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button
                    key={key}
                    className={cn(
                        className,
                        "w-12 h-12 shadow-none text-redLight dark:text-red border border-transparent border-y-redLight dark:border-y-red bg-transparent rounded-none mr-4"
                    )}
                    onClick={onPrevious}
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
                    "shadow-none bg-transparent font-caviar min-w-7 w-7 h-7 text-greyLight dark:text-grey hover:text-redLight dark:hover:text-red border border-transparent rounded-none text-base font-bold",
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
            initialPage={initialPage}
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
