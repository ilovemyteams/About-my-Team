import Image from "next/image";

import { IconCorner } from "../shared/Icons/IconCorner";

export const ProjectStub = () => {
    const cornersStyles =
        "w-9 h-7 tab:w-[42px] tab:h-[33px] pc:w-[63px] pc:h-[50px] desk:w-[80px] desk:h-[63px] dark:text-purple-stroke text-purple-strokeLight";
    return (
        <div className="relative w-full">
            <IconCorner className={`absolute top-0 left-0 ${cornersStyles}`} />
            <IconCorner
                className={`absolute top-0 right-0 scale-x-[-1] ${cornersStyles}`}
            />
            <div className="flex w-full aspect-[4/3] dark:bg-projectCardGradientDark bg-projectCardGradient overflow-hidden">
                <figure className="m-auto flex flex-col justify-between h-[60%]">
                    <Image
                        src="/images/logo.svg"
                        alt="heart-shaped company logo"
                        width={148}
                        height={133}
                        className="mx-auto w-[60%] tab:w-[50%] mt-3 opacity-20 group-hover:scale-110 duration-300 ease-out transition-transform"
                    />
                    {/* <p className="font-caviar text-greyLight dark:text-grey text-lg tab:text-baseb pc:text-2xlb desk:text-4xl">
                        Тут може бути ваш проєкт
                    </p> */}
                    <figcaption className="font-caviar text-greyLight dark:text-grey text-lg tab:text-[1.8cqw] font-bold">
                        Тут може бути ваш проєкт
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};
