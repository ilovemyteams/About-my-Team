import { ColoredTitle } from "../shared/ColoredTitle";

export const TitleFooter = () => {
    const titleNames = ["titleFirstLine", "titleSecondLine"];

    return (
        <h2 className="font-caviar text-3xl tab:text-4xl pc:text-6xl desk:text-7xl w-[87%] max-w-[330px] tab:w-full tab:max-w-fit">
            <ColoredTitle
                categoryName="Footer"
                propName={titleNames}
                className=" tab:[&:nth-of-type(2)]:pl-[133px] pc:[&:nth-of-type(2)]:pl-[165px]"
            />
        </h2>
    );
};
