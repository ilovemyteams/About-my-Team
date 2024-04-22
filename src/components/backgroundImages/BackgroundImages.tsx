import Cookies from "js-cookie";
import { BackgroundCircles } from "./BackgroundCircles";
import { BackgroundCirclesBigScreens } from "./BackgroundCircles1536BigScreens";
import { BackgroundCirclesMobile } from "./BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "./BackgroundCirclesTablet";

export const BackgroundImages = () => {
    const userTheme = Cookies.get("theme") || { value: "dark" };

    return (
        <div
            className={`${userTheme === "dark" ? "block" : "hidden"} fixed z-[-10]`}
        >
            <BackgroundCircles />
            <BackgroundCirclesTablet />
            <BackgroundCirclesMobile />
            <BackgroundCirclesBigScreens />
        </div>
    );
};
