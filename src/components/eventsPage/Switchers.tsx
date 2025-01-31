import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

export const Switchers = () => {
    return (
        <div className="hidden pc:block absolute top-8 right-[4rem]">
            <div className="flex gap-[204px] relative z-20">
                <LocaleSwitcher />
                <ThemeSwitcher id="DesktopHeaderMenuThemeSwitcher" />
            </div>
        </div>
    );
};
