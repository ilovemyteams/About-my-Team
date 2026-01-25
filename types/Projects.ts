import { Slug } from "@/src/mockedData/portfolioData";

export type Project = {
    id: Slug;
    startDate: string;
    endDate?: string;
    role?: string;
    skills?: string[];
};
