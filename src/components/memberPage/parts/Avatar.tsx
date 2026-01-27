import { IconProfile } from "@/src/components/shared/Icons/IconProfile";
import { ImageFromCloud } from "@/src/components/shared/ImageFromCloud";

interface AvatarProps {
    imageURL?: string;
    position: string;
    name: string;
}

export const Avatar = ({ imageURL, position, name }: AvatarProps) => {
    return (
        <section className="grid grid-cols-[144px_1fr] tab:grid-cols-1 mb-px tab:mb-3">
            <div
                className={`
                    relative
                    w-[144px] h-[167px]
                    tab:w-[336px] tab:h-[312px] tab:mb-6
                    pc:w-[288px] pc:h-[333px]
                    desk:w-[324px] desk:h-[333px]
                `}
            >
                <div className="absolute flex items-end justify-center bg-memberMenuGradientLight dark:bg-memberMenuGradientDark inset-0 w-full z-[-1] overflow-hidden">
                    <IconProfile className="w-[80%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                </div>
                {imageURL && (
                    <ImageFromCloud
                        storage="members"
                        src={imageURL}
                        width={550}
                        height={550}
                        alt={name}
                        loading="lazy"
                        className={"object-cover w-full h-full"}
                    />
                )}
            </div>
            <div className="text-left tab:text-center p-4">
                <p className="font-caviar font-bold text-base text-purple-200 dark:text-white-200 mb-2 tab:text-lg pc:text-xl">
                    {name}
                </p>
                <p className="font-geist text-xs pc:text-sm text-purple-130 dark:text-purple-50 uppercase">
                    {position}
                </p>
            </div>
        </section>
    );
};
