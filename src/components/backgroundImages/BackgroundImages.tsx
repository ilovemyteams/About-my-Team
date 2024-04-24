import { BackgroundCircles } from "./BackgroundCircles";
import { BackgroundCirclesBigScreens } from "./BackgroundCircles1536BigScreens";
import { BackgroundCirclesMobile } from "./BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "./BackgroundCirclesTablet";

export const BackgroundImages = () => {
    return (
        <div className={`dark:block hidden fixed z-[-10]`}>
            <BackgroundCircles />
            <BackgroundCirclesTablet />
            <BackgroundCirclesMobile />
            <BackgroundCirclesBigScreens />
        </div>
    );
};
