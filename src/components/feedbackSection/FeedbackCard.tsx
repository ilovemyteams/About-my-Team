import Image from "next/image";
import { FeedbackDataItem } from "./feedbackData";

interface FeedbackDataProps {
    item: FeedbackDataItem;
}
export const FeedbackCardFirstPart = ({ item }: FeedbackDataProps) => {
    const { siteView, name, reviewer, reviewerRole, linkToSite, feedback } =
        item;
    const siteTypeUp = siteView.toUpperCase();
    return (
        <div>
            <p>{feedback}</p>
            <p>{reviewer}</p>
            <p>{reviewerRole}</p>
            <h5>{name}</h5>
            <p>{siteTypeUp}</p>
            <p>{linkToSite}</p>
        </div>
    );
};
export const FeedbackCardSecondPart = ({ item }: FeedbackDataProps) => {
    return (
        <div>
            <Image src={item.image} alt={item.name} width={540} height={346} />
        </div>
    );
};
