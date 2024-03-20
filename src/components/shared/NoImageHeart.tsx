import Image from "next/image";

export const NoImageHerat = () => {
    return (
        <Image
            src="/images/heartHeaderMenu.svg"
            width={240}
            height="0"
            alt="logo heart"
            className="w-[123px] pc:w-[240px] h-auto absolute top-0 right-0"
        />
    );
};
