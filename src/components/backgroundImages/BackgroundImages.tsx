import { BackgroundCircles } from "./BackgroundCircles";
import { BackgroundCirclesMobile } from "./BackgroundCirclesMobile";
import { BackgroundFigures } from "./BackgroundFigures";

export const BackgroundImages = () => {
    return (
        <div className="fixed z-[-10]">
            <BackgroundCircles className="hidden w-screen pc:block " />
            <BackgroundCirclesMobile />
            <BackgroundFigures />
        </div>
    );
};
