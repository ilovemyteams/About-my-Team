import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

export const Switchers = () => {
    return (
        <div className="absolute top-0 left-0 right-0 container max-w-[540px] tab:max-w-full desk:max-w-[1456px] scroll-mt-[90px] pc:scroll-mt-[30px] pt-8 tab:pt-12 pc:pt-8 pb-[111px] tab:pb-[100px] pc:pb-12">
            <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="DesktopHeaderMenuThemeSwitcher" />
            </div>
        </div>
    );
};
