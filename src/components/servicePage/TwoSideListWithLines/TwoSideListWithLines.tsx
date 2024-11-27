import React from "react";

import { ServiceContentType } from "@/src/mockedData/servicesDara";

import { PageSection } from "../../shared/PageSection";

interface TwoSideListWithLinesProps {
    content: ServiceContentType;
}

export const TwoSideListWithLines = ({
    content,
}: TwoSideListWithLinesProps) => {
    const { description, title } = content;

    // const Divider = () => (
    //     <div className="w-full h-[1px] bg-strokeLight dark:bg-stroke" />
    // );
    return (
        <PageSection>
            <h2 className="font-caviar text-purple-200 dark:text-white-200 text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-10 tab:mb-[64px] pc:mb-[80px]">
                {title}
            </h2>
            <div>
                {description.map((desc, index) => (
                    <div key={index}>
                        <h3>{desc.title}</h3>
                        <p>{desc.text.toString()}</p>
                    </div>
                ))}
            </div>
        </PageSection>
    );
};
