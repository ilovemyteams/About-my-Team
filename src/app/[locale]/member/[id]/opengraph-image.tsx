/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { useLocale } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

export const alt = "Member profile image";
export const contentType = "image/jpg";

export default async function Image({ params }: { params: { id: string } }) {
    const member = membersData.find(member => member.data.id === params.id);
    const locale = useLocale();

    if (!member) {
        return new ImageResponse(
            (
                <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientDark">
                    <img
                        src="https://opengraph.b-cdn.net/production/images/58fd5b62-5cde-4715-a47f-98109358bbbe.jpg?token=a5qWorH768_gbAFM93r0DhTNezSrqC-LlKu7EVmUSfQ&height=630&width=1200&expires=33263692852"
                        alt="Person not found"
                    />
                </div>
            )
        );
    }

    return new ImageResponse(
        (
            <div>
                <img
                    src="https://opengraph.b-cdn.net/production/images/58fd5b62-5cde-4715-a47f-98109358bbbe.jpg?token=a5qWorH768_gbAFM93r0DhTNezSrqC-LlKu7EVmUSfQ&height=630&width=1200&expires=33263692852"
                    alt={member[locale as LocaleType]?.name}
                />

                <p>{member[locale as LocaleType]?.name}</p>
                <p className=" uppercase">{member.data.position}</p>
            </div>
        )
    );
}
