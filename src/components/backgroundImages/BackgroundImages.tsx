import { BackgroundCircles } from "./BackgroundCircles";
import { BackgroundCirclesMobile } from "./BackgroundCirclesMobile";

export const BackgroundImages = () => {
    return (
        <div className="fixed z-[-10]">
            <BackgroundCircles />
            <BackgroundCirclesMobile />
        </div>
    );
};
