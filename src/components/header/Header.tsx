import Image from "next/image";

export const Header = () => {
    return (
        <header
            className="hidden pc:fixed top-0 left-0 w-[80px] h-[100vh] bg-transparent pc:flex flex-col items-center
                justify-between py-8 border-solid border-r-[1px] border-purple-stroke"
        >
            <Image
                src="/images/logo.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="w-[68px] h-auto"
            />
            <Image
                src="/images/burger.svg"
                width="0"
                height="0"
                alt="Burger menu"
                className="w-[40px] h-auto"
            />
            <div>
                <Image
                    src="/images/linkedin.svg"
                    width="0"
                    height="0"
                    alt="Linkedin"
                    className="w-[48px] h-auto"
                />
                <Image
                    src="/images/behance.svg"
                    width="0"
                    height="0"
                    alt="Behance"
                    className="w-[48px] h-auto"
                />
                <Image
                    src="/images/github.svg"
                    width="0"
                    height="0"
                    alt="GitHub"
                    className="w-[48px] h-auto"
                />
            </div>
        </header>
    );
};
