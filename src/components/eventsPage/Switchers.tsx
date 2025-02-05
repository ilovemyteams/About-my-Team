import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

export const Switchers = () => {
    return (
        <div className="hidden pc:block absolute top-8 right-0 w-full">
            <div className="w-full tab:max-w-full desk:max-w-[1456px] mx-auto ">
                <div className="flex gap-[204px] relative z-20 justify-end pr-[4rem]">
                    <LocaleSwitcher />
                    <ThemeSwitcher id="DesktopHeaderMenuThemeSwitcher" />
                </div>
            </div>
        </div>
    );
};
