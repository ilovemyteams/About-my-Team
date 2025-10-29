import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { LocaleType } from "@/types/LocaleType";

import { MemberDataItemType } from "../../mockedData/membersData";
import { Button } from "../shared/Button";

export const MemberCard = async ({ data }: { data: MemberDataItemType }) => {
    const getTranslation = await getTranslations("Buttons");
    const locale = await getLocale();
    const { imageURL } = data.data;
    console.log(data.data.imageURL);
    return (
        <div className="size-full border">
            <Image
                src={imageURL || ""}
                alt={data[locale as LocaleType]?.name}
                width="100"
                height="100"
                loading="lazy"
            />

            <h1>{data[locale as LocaleType]?.name}</h1>
            <p>{data[locale as LocaleType]?.about}</p>

            <Button>{getTranslation("allProjects")}</Button>
        </div>
    );
};
