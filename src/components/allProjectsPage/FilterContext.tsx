"use client";

import { createContext, useContext, useState } from "react";
import React from "react";

type FilterContextType = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};
interface FilterProviderProps {
    children: React.ReactNode;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilterContext must be within FilterProvider");
    }
    return context;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("AllProjects");

    console.log("FilterProvider is rendering");

    return (
        <FilterContext.Provider
            value={{ selectedCategory, setSelectedCategory }}
        >
            {children}
        </FilterContext.Provider>
    );
};
