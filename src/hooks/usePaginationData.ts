interface UsePaginationReturn<T> {
    dataSlice: T[];
    totalPages: number;
    isPaginationNeeded: boolean;
}

export const usePaginationData = <T>(
    itemsList: T[],
    itemsPerPage: number,
    pageNumber: number
): UsePaginationReturn<T> => {
    const listLength = itemsList.length;
    const min = (pageNumber - 1) * itemsPerPage;
    const max = Math.min(min + itemsPerPage, listLength);

    const isPaginationNeeded = listLength > itemsPerPage;

    const dataSlice = isPaginationNeeded
        ? itemsList.slice(min, max)
        : itemsList;

    const totalPages =
        listLength % itemsPerPage === 0
            ? listLength / itemsPerPage
            : Math.trunc(listLength / itemsPerPage) + 1;

    return { dataSlice, totalPages, isPaginationNeeded };
};
