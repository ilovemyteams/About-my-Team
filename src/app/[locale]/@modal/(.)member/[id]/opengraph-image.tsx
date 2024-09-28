import { ImageResponse } from "next/og";
import { membersData } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";
import { useLocale } from "next-intl";
import { IconProfile } from "@/src/components/shared/Icons/IconProfile";

export const alt = "Member profile image";

export default async function Image({ params }: { params: { id: string } }) {
    const member = membersData.find(member => member.data.id === params.id);
    const locale = useLocale();

    if (!member) {
        return new ImageResponse(
            (
                <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark">
                    <IconProfile className=" text-purple-strokeLight dark:text-purple-stroke" />
                </div>
            )
        );
    }

    return new ImageResponse(
        (
            <div>
                <img
                    src={member.data.imageURL}
                    alt={member[locale as LocaleType]?.name}
                />
                <p>{member[locale as LocaleType]?.name}</p>
                <p className=" uppercase">{member.data.position}</p>
            </div>
        )
    );
}
