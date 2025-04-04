import Image from "next/image";

export const CounterBox = () => {
    return (
        <div
            className="px-[11px] py-[7px] w-[72px] h-[42px] items-center text-base tab:text-2xl desk:text-3xl tab:leading-6 desk:leading-7 leading-4 justify-center
            tab:w-[107px] tab:h-[62px] desk:w-[129px] desk:h-[76px]
            dark:bg-CTAGradient bg-CTAGradientLight text-purple-200 dark:text-grey border border-t-0 tab:border-t-1 border-purple-strokeLight dark:border-purple-stroke
        flex"
        >
            <div className="flex gap-1 items-end">
                <Image
                    src="/images/easter/bunnyWithEgg.svg"
                    alt="Bunny with egg"
                    width={99}
                    height={193}
                    className="w-[14px] h-auto tab:w-[22px] desk:w-[26px]"
                />
                <p className="">x</p>
                <p className="">20</p>
            </div>
        </div>
    );
};
