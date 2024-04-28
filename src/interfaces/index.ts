export interface INews {
    author: string;
    category: CategoriesType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export interface NewsApiResponce {
    news: INews[];
    page: number;
    status: string;
}

export interface IPaginationPrors {
    totalPages: number
    handlePreviousPage: () => void
    handleNextPage: () => void
    handlePageClick: (page: number) => void
    currentPage: number
}

export interface CategoriesApiResponce {
    categories: CategoriesType[];
    description: string;
    status: string;
}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters>
export type SkeletonType = "banner" | "item"
export type DirectionType = "row" | "column"


export type CategoriesType =
    | "regional"
    | "technology"
    | "lifestyle"
    | "business"
    | "general"
    | "programming"
    | "science"
    | "entertainment"
    | "world"
    | "sports"
    | "finance"
    | "academia"
    | "politics"
    | "health"
    | "opinion"
    | "food"
    | "game"
    | "fashion"
    | "academic"
    | "crap"
    | "travel"
    | "culture"
    | "economy"
    | "environment"
    | "art"
    | "music"
    | "notsure"
    | "CS"
    | "education"
    | "redundant"
    | "television"
    | "commodity"
    | "movie"
    | "entrepreneur"
    | "review"
    | "auto"
    | "energy"
    | "celebrity"
    | "medical"
    | "gadgets"
    | "design"
    | "EE"
    | "security"
    | "mobile"
    | "estate"
    | "funny";