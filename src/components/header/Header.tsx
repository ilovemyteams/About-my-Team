import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { LogoLink } from "./LogoLink";

export const Header = () => {
    return (
        <header
            className="hidden pc:fixed top-0 left-0 w-[80px] h-[100vh] z-20 bg-transparent pc:flex flex-col items-center
                justify-between py-8 border-solid border-r-[1px] border-purple-stroke"
        >
            <LogoLink />
            <Image
                src="/images/burger.svg"
                width="0"
                height="0"
                alt="Burger menu"
                className="w-[40px] h-auto"
            />
            <SocialLinks />
        </header>
    );
};
