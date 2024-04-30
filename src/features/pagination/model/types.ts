export interface IPaginationPrors {
    totalPages: number
    handlePreviousPage: () => void
    handleNextPage: () => void
    handlePageClick: (page: number) => void
    currentPage: number
}