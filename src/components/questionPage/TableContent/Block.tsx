import React from "react";

import { ListTextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface BlockProps {
    item: string | ListTextItemType;
    searchTerm: string;
}
export const Block = ({ item, searchTerm }: BlockProps) => {
    if (typeof item === "string") {
        return (
            <li>
                <p className="text-sm20 tab:text-base23 desk:text-lg25">
                    <HighlightText text={item} toBeHighlighted={searchTerm} />
                </p>
            </li>
        );
    }

    const { text, title, type, list } = item;
    return (
        <li className="mb-6">
            {title && (
                <h4
                    className={`${list !== "sublist" ? "min-h-[40px] tab:min-h-[46px] desk:min-h-[50px]" : ""} font-caviar text-lg mb-3 flex gap-2 desk:text-xl before:w-[20px] ${type === "listItem" ? "before:block" : "before:hidden"} before:h-[20px] before:shrink-0 before:bg-[url('/images/pencil&ruler.svg')] before:bg-no-repeat before:bg-contain before:bg-center`}
                >
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h4>
            )}
            <ul
                className={`${list === "sublist" ? "list-disc ml-12" : ""}  text-sm20 tab:text-base23 desk:text-lg25`}
            >
                {text.map((paragraph, i) => (
                    <li key={i}>
                        <HighlightText
                            text={paragraph}
                            toBeHighlighted={searchTerm}
                        />
                    </li>
                ))}
            </ul>
        </li>
    );

    // <li key={index} className="mb-6">
    //                     <div className="flex gap-2 mb-3">
    //                         {/* <Image
    //                             src="/images/pencil&ruler.svg"
    //                             alt="icon pencil and ruler"
    //                             width={20}
    //                             height={20}
    //                         /> */}
    //                         <h4 className={`font-caviar text-lg flex gap-2 desk:text-xl before:w-[20px] ${item. ===''}before: before:h-[20px] before:shrink-0 before:bg-[url('/images/pencil&ruler.svg')] before:bg-no-repeat before:bg-contain before:bg-center`}>
    //                             {typeof item === "string" ? (
    //                                 <HighlightText
    //                                     text={item}
    //                                     toBeHighlighted={searchTerm}
    //                                 />
    //                             ) : (
    //                                 <HighlightText
    //                                     text={item.title || ""}
    //                                     toBeHighlighted={searchTerm}
    //                                 />
    //                             )}
    //                         </h4>
    //                     </div>
    //                     {typeof item !== "string" && item.text && (
    //                         <ul className=" list-disc ml-12 text-sm20 tab:text-base23 desk:text-lg25">
    //                             {Array.isArray(item.text) ? (
    //                                 item.text.map((subItem, i) => (

    //                                 ))
    //                             ) : (
    //                                 <li>
    //                                     <HighlightText
    //                                         text={item.text}
    //                                         toBeHighlighted={searchTerm}
    //                                     />
    //                                 </li>
    //                             )}
    //                         </ul>
    //                     )}
    //                 </li>
};
