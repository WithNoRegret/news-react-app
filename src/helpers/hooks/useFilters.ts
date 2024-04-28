import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initinalFilters: IFilters) => {
    const [filters, setFilters] = useState<IFilters>(initinalFilters);

    const changeFilter = (key: string, value: string | number | null) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }))
    }

    return { filters, changeFilter }
}