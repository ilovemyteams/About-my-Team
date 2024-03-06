import { useTranslations } from "next-intl";

export interface PortfolioDataItem {
    name: string;
    image: string;
    video?: string;
    siteView: string;
    implementations: string[];
    description: string;
    id: string;
}

export const PortfolioData = (): PortfolioDataItem[] => {
    const getTranslation = useTranslations("Portfolio");
    return [
        {
            name: getTranslation("siteNameWithId1"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",

            siteView: getTranslation("lending"),
            implementations: ["Design", "Logo Design", "Web Development"],
            description: getTranslation("descriptionId1"),
            id: "01",
        },
        {
            name: getTranslation("siteNameWithId2"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146269/cld-sample-4.jpg",
            siteView: getTranslation("site"),
            implementations: ["Design", "Web Development"],

            description: getTranslation("descriptionId2"),
            id: "02",
        },
        {
            name: getTranslation("siteNameWithId3"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146240/samples/people/jazz.jpg",
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
            siteView: getTranslation("internetShop"),
            implementations: ["Design", "Logo Design", "Web Development"],

            description: getTranslation("descriptionId3"),
            id: "03",
        },
        {
            name: getTranslation("siteNameWithId4"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg",
            siteView: getTranslation("businessCard"),
            implementations: ["Design", "Business Analysis", "Web Development"],

            description: getTranslation("descriptionId4"),
            id: "04",
        },
        {
            name: getTranslation("siteNameWithId5"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146244/samples/ecommerce/accessories-bag.jpg",

            siteView: getTranslation("corporateSite"),
            implementations: ["Design", "Logo Design", "Web Development"],

            description: getTranslation("descriptionId5"),
            id: "05",
        },
        {
            name: getTranslation("siteNameWithId6"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146267/cld-sample.jpg",
            siteView: getTranslation("blog"),
            implementations: [
                "Business Analysis",
                "Web Development",
                "Testing",
            ],

            description: getTranslation("descriptionId6"),
            id: "06",
        },
    ];
};
