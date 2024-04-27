import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from "./styles.module.css"
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const responce = await getNews();
                setNews(responce.news);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, [])

    return (
        <>
            <main className={styles.main}>
                {news.length > 0 && !isLoading
                    ? <NewsBanner
                        item={news[0]}
                    />
                    : <Skeleton count={1} type="banner" />
                }
                {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}
            </main>
        </>
    )
}