import { PageSection } from "../shared/PageSection";
import { ThumbnailHalloween } from "./ThumbnailHalloween";

export const PastEvents = () => {
    return (
        <PageSection className="flex flex-col tab:flex-row py-4 gap-3 tab:gap-3 border-b-1 border-purple-strokeLight dark:border-purple-stroke">
            <div
                className={`w-full tab:w-[300px] desk:w-[375px] shrink-0 grow-0 relative overflow-hidden`}
            >
                <ThumbnailHalloween />
            </div>

            <div className="flex flex-col tab:pl-3 pc:px-3 desk:pl-4 justify-between">
                <div>
                    <p>31.10.24</p>
                    <h2
                        className="pc:hover:text-redLight dark:pc:hover:text-red
                    pc:focus:text-redLight dark:pc:focus:text-red focus:outline-none  dark:active:text-red active:text-redLight pc:transition pc:ease-out pc:duration-300 font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-2xlb line-clamp-2 mb-3"
                    >
                        Lorem ipsum dolor sit amet consectetur
                    </h2>
                    <p className="text-sm tab:text-base line-clamp-3 text-greyLight dark:text-grey mb-2.5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Non deserunt animi rerum aliquid provident, in eos
                        accusamus ipsam ea ducimus. Officiis reiciendis, dicta
                        saepe quasi eos illo qui ut perferendis. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Non
                        deserunt animi rerum aliquid provident, in eos accusamus
                        ipsam ea ducimus. Officiis reiciendis, dicta saepe quasi
                        eos illo qui ut perferendis.
                    </p>
                </div>
            </div>
        </PageSection>
    );
};
