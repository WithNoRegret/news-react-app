import { formatDate } from "../../helpers/formatDate"
import styles from "./styles.module.css"

export const Pagination = ({ totalPages, currentPage, handleNextPage, handlePreviousPage, handlePageClick }) => {

    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePreviousPage}
                className={styles.arrow}
                disabled={currentPage === 1}
            >{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return (
                        <button
                            key={index}
                            className={styles.pageNumber}
                            onClick={() => handlePageClick(index + 1)}
                            disabled={currentPage === index + 1}
                        >{index + 1}</button>)
                })}
            </div>
            <button
                onClick={handleNextPage}
                className={styles.arrow}
                disabled={currentPage === totalPages}
            >{'>'}</button>
        </div>
    )
}