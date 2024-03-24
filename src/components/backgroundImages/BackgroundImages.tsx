import { BackgroundCircles } from "./BackgroundCircles";
import { BackgroundCirclesMobile } from "./BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "./BackgroundCirclesTablet";
import { BackgroundFigures } from "./BackgroundFigures";

export const BackgroundImages = () => {
    return (
        <div className="fixed z-[-10]">
            <BackgroundCircles />
            <BackgroundCirclesTablet />
            <BackgroundCirclesMobile />
            <BackgroundFigures />
        </div>
    );
};
