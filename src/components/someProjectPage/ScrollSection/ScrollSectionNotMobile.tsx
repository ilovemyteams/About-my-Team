import { ScrollSectionDataType } from "@/src/mockedData/portfolioData";

interface ScrollSectionNotMobileProps {
    data: ScrollSectionDataType[];
}

export const ScrollSectionNotMobile = ({
    data,
}: ScrollSectionNotMobileProps) => {
    console.log(data);
    return <div>ScrollSectionNotMobile</div>;
};
