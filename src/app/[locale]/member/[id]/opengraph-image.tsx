/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { useLocale } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

export const alt = "Member profile image";

export default async function Image({ params }: { params: { id: string } }) {
    const member = membersData.find(member => member.data.id === params.id);
    const locale = useLocale();

    if (!member) {
        return new ImageResponse(
            (
                <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientDark">
                    <img src="/images/profile.jpg" alt="Person not found" />
                </div>
            )
        );
    }

    return new ImageResponse(
        (
            <div>
                <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientDark">
                    <img
                        src="/images/profile.png"
                        alt={member[locale as LocaleType]?.name}
                    />
                </div>
                <p>{member[locale as LocaleType]?.name}</p>
                <p className=" uppercase">{member.data.position}</p>
            </div>
        )
    );
}
