import { Fragment } from "react";

import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { IconQADecoration } from "../shared/Icons/IconQADecoration";

interface ListContentProps {
    content: LongAnswerListType[];
    activeSubList?: boolean;
}

export const ListContent = ({
    activeSubList = false,
    content,
}: ListContentProps) => {
    const listStyle = activeSubList ? "list-disc ml-6" : "";

    return (
        <div className="flex flex-col tab:flex-row justify-start gap-8">
            <ol className="tab:max-w-[517px] pc:max-w-[688px] flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                {content.map((item, i) => (
                    <li
                        key={i}
                        className="flex flex-row gap-4 tab:gap-10 pc:gap-[60px]"
                    >
                        <div>
                            <p className="font-caviar text-[48px] pc:text-[90px] leading-none font-bold text-purple-strokeLight dark:text-purple-dark sticky top-[15%]">
                                {i < 10 ? `0${i + 1}` : i + 1}
                            </p>
                        </div>

                        <div className="pb-4 tab:pb-6 pc:pb-10 border-b-[1px] border-purple-strokeLight dark:border-purple-stroke">
                            <h3 className="font-caviar text-lg tab:text-3xl mb-4 tab:mb-6 pc:mb-10 max-w-[60%] text-purple-200 dark:text-white-200">
                                {item.title}
                            </h3>
                            <ul>
                                {item.text.map((text, index) => (
                                    <Fragment key={index}>
                                        {typeof text === "string" && (
                                            <li className={listStyle}>
                                                <p>{text}</p>
                                            </li>
                                        )}
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
            <div className="text-redLight dark:text-red mx-auto w-[76px] pc:w-[110px]">
                <IconQADecoration className="block tab:sticky tab:top-[15%]" />
            </div>
        </div>
    );
};
