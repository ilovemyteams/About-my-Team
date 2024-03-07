import Image from "next/image";

interface ButtonShareProps {
    className?: string;
}

export const ButtonShare = ({ className }: ButtonShareProps) => {
    return (
        <button
            type="button"
            className={`h-[25px] justify-end items-end mr-[5px] ${className}`}
        >
            <div className="flex ">
                <p className="border-b-[1px] mr-[5px]">Поділитися</p>
                <Image
                    src="/images/solar_share-linear.svg"
                    width="0"
                    height="0"
                    alt="Share icon"
                    className="w-6 h-auto border-b-0"
                />
            </div>
        </button>
    );
};
