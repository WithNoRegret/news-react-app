import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getCategories, getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"
import { Categories } from "../../components/Categories/Categories"
import { Search } from "../../components/Search/Search"
import { useDebounce } from "../../helpers/hooks/useDebounce"

export const Main = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [keywords, setKeywords] = useState('');
    const debouncedKeywords = useDebounce(keywords, 1500);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const responce = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === 'All' ? null : selectedCategory,
                keywords: debouncedKeywords
            });
            setNews(responce.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCategories = async () => {
        try {
            const responce = await getCategories();
            setCategories(["All", ...responce.categories]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory, debouncedKeywords]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <main className={styles.main}>
                <Categories
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
                <Search
                    keywords={keywords}
                    setkeywords={setKeywords}
                />
                {news.length > 0 && !isLoading
                    ? <NewsBanner
                        item={news[0]}
                    />
                    : <Skeleton count={1} type="banner" />
                }
                <Pagination
                    currentPage={currentPage}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                    handlePageClick={handlePageClick}
                    totalPages={totalPages}
                />
                {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}
                <Pagination
                    currentPage={currentPage}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                    handlePageClick={handlePageClick}
                    totalPages={totalPages}
                />
            </main>
        </>
    )
}