import { LogoLink } from "./LogoLink";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { SocialLinks } from "./SocialLinks";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
    return (
        <header>
            <div
                className="hidden pc:fixed top-0 left-0 w-[80px] h-[100vh] z-20 bg-transparent pc:flex flex-col items-center
                justify-between py-8 border-solid border-r-[1px] border-purple-stroke"
            >
                <LogoLink />
                <BurgerMenuButton />
                <SocialLinks />
            </div>
            <HeaderMenu />
        </header>
    );
};
