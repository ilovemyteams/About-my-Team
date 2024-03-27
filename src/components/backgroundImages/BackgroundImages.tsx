import { BackgroundCircles } from "./BackgroundCircles";
import { BackgroundCirclesMobile } from "./BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "./BackgroundCirclesTablet";

export const BackgroundImages = () => {
    return (
        <div className="fixed z-[-10]">
            <BackgroundCircles />
            <BackgroundCirclesTablet />
            <BackgroundCirclesMobile />
        </div>
    );
};
