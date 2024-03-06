import { PortfolioCard } from "./PortfolioCard";
import { useLocale } from "next-intl";
import { porfolioData } from "./PortfolioData";

interface PortfolioItem {
    id: number;
    img: string;
    uk: { name: string; type: string };
    en: { name: string; type: string };
    pl: { name: string; type: string };
}

type Locale = "uk" | "en" | "pl";

export const PortfolioSlider = () => {
    const locale = useLocale();

    /*ToDo: Implement Slider */
    return (
        <div className="max-w-[50%] flex flex-col justify-end">
            <div className="flex gap-6 justify-end mb-12">
                <div className="w-12 h-12 bg-purple-100"></div>
                <div className="w-12 h-12 bg-purple-100"></div>
            </div>
            <ul>
                {porfolioData.map((data: PortfolioItem) => (
                    <li key={data.id}>
                        <PortfolioCard
                            data={data[locale as Locale]}
                            img={data.img}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
