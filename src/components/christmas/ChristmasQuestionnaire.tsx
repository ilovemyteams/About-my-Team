import Image from "next/image";

import { PageSection } from "../shared/PageSection";

export const ChristmasQuestionnaire = () => {
    return (
        <PageSection className="pb-[80px]">
            <div className=" relative bg-memberMenuGradientLight w-full min-h-full min-w-[288px]  p-2">
                <div className=" w-full min-h-full border-dash-horizontal ">
                    <div className="w-full min-h-full border-dash-vertical">
                        <div className="  p-2 w-full min-h-full">
                            <div className="bg-headerGradientLight p-2 w-full min-h-full">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur vel consequatur
                                tempore quo odio distinctio sed, cum culpa quia
                                laborum totam ducimus similique hic odit
                                dignissimos suscipit dolorum eligendi
                                doloremque!
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/сhristmasTreeBranches.svg"
                    alt="Christmas tree branches"
                    width={229}
                    height={87}
                    className="absolute bottom-[-80px] left-[-20px] z-[-1]"
                />
            </div>
        </PageSection>
    );
};
