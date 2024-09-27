// import { useTranslations } from "next-intl";
import { PortableText } from "@portabletext/react";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortfolioTitleProps } from "@/types/sanityDataPropsTypes";

export const MobTitle = ({
    value,
}: {
    value: PortfolioTitleProps[] | undefined;
}) => {
    if (!value) return null;

    return (
        <div className="tab:hidden">
            <PortableText value={value} components={myPortableTextComponents} />
        </div>
    );
};

// export const MobTitle = () => {
//     const getTranslation = useTranslations("Portfolio");

//     return (
//         <div className="tab:hidden">
//             <p>
//                 {getTranslation("titleFirstWord")}
//                 <span className="text-purple-100">
//                     {getTranslation("titleSecondWord")}
//                 </span>
//                 ,{getTranslation("titleThirdWord")}
//                 <span className="text-purple-100">
//                     {getTranslation("titleFourthWord")}
//                 </span>
//                 {getTranslation("titlePartForMob")}
//                 <span className="text-purple-100">
//                     {getTranslation("titleSeventhWord")}
//                 </span>
//             </p>
//         </div>
//     );
// };
