import Image from "next/image";

import { SliderType } from "@/src/mockedData/portfolioData";

import { IconCheck } from "../../shared/Icons/IconCheck";

export const DecisionCard = ({
    data,
    direction,
}: {
    data: SliderType;
    direction: "next" | "prev" | undefined;
}) => {
    const { slideLeft, slideRight } = data;

    return (
        <div className="flex flex-col gap-3 tab:flex-row tab:gap-0 desk:gap-[52px] h-[462px] tab:h-[358px] pc:h-[464px] desk:h-[530px]">
            <div
                className={`tab:w-1/2 flex flex-col gap-3 tab:gap-8 pc:gap-6 transition-all duration-700 ease-in-out 
                    ${direction === "prev" && "animate-slideDown"} ${direction === "next" && "animate-slideUp"}`}
            >
                {slideLeft.map((item, idx) => (
                    <div key={idx}>
                        {"image" in item && item.image && (
                            <div className="relative border dark:border-purple-stroke border-purple-100 p-2 pc:p-3 desk:p-4 w-[288px] tab:w-[89%] desk:w-[574px] mx-auto tab:mr-auto tab:ml-0">
                                <Image
                                    src={item.image}
                                    alt="image"
                                    width={542}
                                    height={355}
                                    className=""
                                />
                                {"screenImage" in item && item.screenImage && (
                                    <Image
                                        src={item.screenImage}
                                        alt="screenImage"
                                        width={260}
                                        height={290}
                                        className="absolute z-10 tab:hidden right-[10px] bottom-0 w-[80px] h-auto"
                                    />
                                )}
                            </div>
                        )}
                        {"text" in item && item.text && (
                            <ul className="space-y-2 tab:space-y-4 pc:space-y-5 desk:space-y-6">
                                {item.text.map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 pc:gap-3 items-start"
                                    >
                                        <div>
                                            <IconCheck className="w-4 pc:w-6 h-auto dark:text-disabledLight text-purple-130" />
                                        </div>
                                        <div>
                                            <p className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey">
                                                {text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <div
                className={`tab:w-1/2 flex tab:flex-col gap-3 tab:gap-8 pc:gap-6 flex-col-reverse transition-all duration-700 ease-in-out
                    ${direction === "prev" && "animate-slideUp"} ${direction === "next" && "animate-slideDown"}`}
            >
                {slideRight.map((item, idx) => (
                    <div key={idx}>
                        {"image" in item && item.image && (
                            <div className="border dark:border-purple-stroke border-purple-100 p-2 pc:p-3 desk:p-4 w-[288px] mx-auto tab:w-[89%] desk:w-[574px] tab:ml-auto tab:mr-0">
                                <Image
                                    src={item.image}
                                    alt="image"
                                    width={542}
                                    height={355}
                                    className=""
                                />
                            </div>
                        )}
                        {"text" in item && item.text && (
                            <ul className="space-y-2 tab:space-y-4 pc:space-y-5 desk:space-y-6">
                                {item.text.map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 pc:gap-3 items-start"
                                    >
                                        <div>
                                            <IconCheck className="w-4 pc:w-6 h-auto dark:text-disabledLight text-purple-130" />
                                        </div>
                                        <div>
                                            <p className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey">
                                                {text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {"screenImage" in item && item.screenImage && (
                            <div className="hidden tab:flex ">
                                <Image
                                    src={item.screenImage}
                                    alt="screenImage"
                                    width={260}
                                    height={290}
                                    className="h-auto tab:w-[160px] pc:w-[240px] desk:w-[260px] mx-auto"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
