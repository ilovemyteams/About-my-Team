import { useTranslations } from "next-intl";

export interface FeedbackDataItem {
    name: string;
    image: string;
    reviewer: string;
    reviewerRole: string;
    video?: string;
    siteView: string;
    linkToSite: string;
    feedback: string;
    id: string;
}

export const FeedbackData = (): FeedbackDataItem[] => {
    const getTranslation = useTranslations("Feedback");
    return [
        {
            name: getTranslation("siteNameWithId1"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
            reviewer: getTranslation("reviewerId1"),
            reviewerRole: getTranslation("reviewerRoleWId1"),
            siteView: getTranslation("lending"),
            linkToSite: "www.selo",
            feedback: getTranslation("feddbackId1"),
            id: "01",
        },
        {
            name: getTranslation("siteNameWithId2"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146269/cld-sample-4.jpg",
            reviewer: getTranslation("reviewerId2"),
            reviewerRole: getTranslation("reviewerRoleWId2"),
            siteView: getTranslation("site"),
            linkToSite: "www.alisainwonderworld",
            feedback: getTranslation("feddbackId2"),
            id: "02",
        },
        {
            name: getTranslation("siteNameWithId3"),
            image: "https://loremflickr.com/640/480/cats",
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
            reviewer: getTranslation("reviewerId3"),
            reviewerRole: getTranslation("reviewerRoleWId3"),
            siteView: getTranslation("internetShop"),
            linkToSite: "www.smaragdovemisto",
            feedback: getTranslation("feddbackId3"),
            id: "03",
        },
        {
            name: getTranslation("siteNameWithId4"),
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg",
            reviewer: getTranslation("reviewerId4"),
            reviewerRole: getTranslation("reviewerRoleWId4"),
            siteView: getTranslation("businessCard"),
            linkToSite: "www.baron",
            feedback: getTranslation("feddbackId4"),
            id: "04",
        },
        {
            name: getTranslation("siteNameWithId5"),
            image: "https://loremflickr.com/640/480/cats",
            reviewer: getTranslation("reviewerId5"),
            reviewerRole: getTranslation("reviewerRoleWId5"),
            siteView: getTranslation("corporateSite"),
            linkToSite: "www.malomander",
            feedback: getTranslation("feddbackId5"),
            id: "05",
        },
        {
            name: getTranslation("siteNameWithId6"),
            image: "https://loremflickr.com/640/480/cats",
            reviewer: getTranslation("reviewerId6"),
            reviewerRole: getTranslation("reviewerRoleWId6"),
            siteView: getTranslation("blog"),
            linkToSite: "www.judimudi",
            feedback: getTranslation("feddbackId6"),
            id: "06",
        },
    ];
};
