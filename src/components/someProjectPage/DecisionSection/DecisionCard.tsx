import Image from "next/image";

import { SliderType } from "@/src/mockedData/portfolioData";

import { IconCheck } from "../../shared/Icons/IconCheck";

export const DecisionCard = ({ data }: { data: SliderType }) => {
    const { slideLeft, slideRight } = data;

    return (
        <div className="flex">
            <div className="w-1/2">
                {slideLeft.map((item, idx) => (
                    <div key={idx}>
                        {"image" in item && item.image && (
                            <Image
                                src={item.image}
                                alt="image"
                                width={542}
                                height={355}
                                className="mb-2"
                            />
                        )}
                        {"text" in item && item.text && (
                            <ul className="space-y-2">
                                {item.text.map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 pc:gap-3 items-start"
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

            <div className="w-1/2">
                {slideRight.map((item, idx) => (
                    <div key={idx}>
                        {"image" in item && item.image && (
                            <Image
                                src={item.image}
                                alt="image"
                                width={542}
                                height={355}
                                className="mb-2"
                            />
                        )}
                        {"text" in item && item.text && (
                            <ul className="space-y-2">
                                {item.text.map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 pc:gap-3 items-start"
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
        </div>
    );
};
