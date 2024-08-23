import { IconBgCurveDesktop } from "../shared/Icons/IconBgCurveDesktop";
import { IconBgCurveMobile } from "../shared/Icons/IconBgCurveMobile";
import { IconBgCurveTablet } from "../shared/Icons/IconBgCurveTablet";

export const BackgroundFigures = () => {
    return (
        <>
            <div className="hidden fixed pc:flex items-end overflow-hidden z-[-10] pc:right-0 pc:top-0 pc:h-[786px] pc:w-[569px]">
                <IconBgCurveDesktop
                    className="absolute pc:object-none pc:object-left pc:top-[-502px] pc:w-[1276px] pc:h-[1288px] z-[-10]
                 text-purple-strokeLight dark:text-purple-stroke"
                />
            </div>
            <div className="hidden pc:hidden tab:flex fixed items-end overflow-hidden z-[-10] tab:h-[518px] tab:w-[497px] ">
                <IconBgCurveTablet
                    className="fixed tab:object-none tab:object-left tab:top-[-195px] tab:right-[-200px] tab:w-[497px] tab:h-[518px]
                 z-[-10] text-purple-strokeLight dark:text-purple-stroke"
                />
            </div>
            <div className="fixed tab:hidden flex items-end w-[272px] h-[244px] right-0 overflow-hidden z-[-10]">
                <IconBgCurveMobile className="w-[272px] h-[244px] object-cover relative right-[-136px] top-[-22px] z-[-10] text-purple-strokeLight dark:text-purple-stroke" />
            </div>
        </>
    );
};
