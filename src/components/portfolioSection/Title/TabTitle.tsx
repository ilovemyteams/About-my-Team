import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortfolioTitleProps } from "@/types/sanityDataPropsTypes";

export const TabTitle = ({
    value,
}: {
    value: PortfolioTitleProps[] | undefined;
}) => {
    if (!value) return null;

    return (
        <div className="hidden tab:block desk:hidden tab:w-[70%]">
            <PortableText value={value} components={myPortableTextComponents} />
        </div>
    );
};

// export const TabTitle = () => {
//     const getTranslation = useTranslations("Portfolio");
//     return (
//         <div className="hidden tab:block desk:hidden">
//             <p>
//                 {getTranslation("titleFirstWord")}
//                 <span className="text-purple-100">
//                     {getTranslation("titleSecondWord")}
//                 </span>
//                 ,
//             </p>
//             <p className="tab:-ml-[100px] pc:ml-0">
//                 {getTranslation("titleThirdWord")}
//                 <span className="text-purple-100">
//                     {getTranslation("titleFourthWord")}
//                 </span>
//                 {getTranslation("titleFifthWord")}
//             </p>
//             <p className="-ml-[100px] max-w-[700px] pc:max-w-[900px]">
//                 {getTranslation("titleSixthWord")}
//                 <span className="text-purple-100">
//                     {getTranslation("titleSeventhWord")}
//                 </span>
//             </p>
//         </div>
//     );
// };
