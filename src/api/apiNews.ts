import axios from "axios";
import { CategoriesApiResponce, NewsApiResponce, ParamsType } from "../interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;


export const getNews = async (params?: ParamsType): Promise<NewsApiResponce> => {
    try {
        const {
            page_number = 1,
            page_size = 10,
            category,
            keywords
        } = params || {};
        const responce = await axios.get<NewsApiResponce>(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            }
        });
        return responce.data;
    } catch (error) {
        console.log(error);
        return { news: [], page: 1, status: "error" };
    }
}

export const getLatestNews = async (): Promise<NewsApiResponce> => {
    try {
        const responce = await axios.get<NewsApiResponce>(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        });
        return responce.data;
    } catch (error) {
        console.log(error);
        return { news: [], page: 1, status: "error" };
    }
}

export const getCategories = async (): Promise<CategoriesApiResponce> => {
    try {
        const responce = await axios.get<CategoriesApiResponce>(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        });
        return responce.data;
    } catch (error) {
        console.log(error);
        return { categories: [], description: '', status: "error" };
    }
}