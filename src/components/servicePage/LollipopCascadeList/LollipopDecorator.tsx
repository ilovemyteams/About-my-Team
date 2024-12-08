import { IconHexagon } from "../../shared/Icons/IconHexagon";

interface LollipopDecoratorProps {
    indexNumber?: number;
}
export const LollipopDecorator = ({ indexNumber }: LollipopDecoratorProps) => {
    // TODO: refactor this component to adopt child
    // to make it reusable
    // and replace <span> below with child
    const itemNumber =
        indexNumber != undefined
            ? indexNumber < 10
                ? `0${indexNumber + 1}`
                : `${indexNumber + 1}`
            : "";

    return (
        <div className="">
            <div className="relative mt-[5px]">
                <IconHexagon className=" w-[67px] h-[57px] pc:w-[80px] pc:h-[70px] dark:text-purple-stroke text-purple-strokeLight" />
                {itemNumber.length > 0 && (
                    <span className="font-caviar text-3xl pc:text-4xl text-purple-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {itemNumber}
                    </span>
                )}
            </div>
            <div
                className={`w-[1px] mt-[-1px] desk:mt-[-2px] h-[calc(100%-62px)]  pc:h-[calc(100%-75px)]  mx-auto dark:bg-purple-stroke bg-purple-strokeLight`}
            ></div>
        </div>
    );
};
