import { allProjectsData } from "@/src/mockedData/allProjectsData";
export const FilterAllProjects = () => {
    const categories = [
        "all",
        ...new Set(allProjectsData.map(item => item.data.category)),
    ];
    console.log(categories);
    return (
        <div className="w-[288px] h-12 border dark:border-purple-stroke border-purple-strokeLight mb-6 tab:mb-11 pc:mb-12">
            <div className="flex flex-col gap-2 tab:gap-4 pc:gap-6">
                {categories.map(category => (
                    <div
                        key={category}
                        className="flex items-center gap-2 tab:gap-4 pc:gap-6 cursor-pointer"
                    >
                        <div
                            className={`w-6 h-6 rounded-full ${
                                category === "all"
                                    ? "bg-purple-100 dark:bg-purple-stroke"
                                    : "bg-purple-200 dark:bg-purple-strokeLight"
                            }`}
                        ></div>
                        <p className="text-sm tab:text-base pc:text-base">
                            {category}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
