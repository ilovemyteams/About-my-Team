import { PageSection } from "@/src/components/shared/PageSection";

export const MemberPage = () => {
    return (
        <PageSection>
            <div className="grid grid-cols-1 tab:grid-cols-[360px_1fr] pc:grid-cols-[328px_1fr]">
                <div className="tab:border border-purple-strokeLight dark:border-purple-stroke p-4">
                    Колонка 1
                </div>
                <div className="tab:border-t tab:border-r tab:border-b border-purple-strokeLight dark:border-purple-stroke p-4">
                    Колонка 2
                </div>
            </div>
        </PageSection>
    );
};

// import Image from "next/image";
// import { getLocale, getTranslations } from "next-intl/server";

// import { LocaleType } from "@/types/LocaleType";

// import { MemberDataItemType } from "../../mockedData/membersData";
// import { Button } from "../shared/Button";

// export const MemberCard = async ({ data }: { data: MemberDataItemType }) => {
//     const getTranslation = await getTranslations("Buttons");
//     const locale = await getLocale();
//     const { imageURL } = data.data;
//     console.log(data.data.imageURL);
//     return (
//         <div className="size-full border">
//             {imageURL && (
//                 <Image
//                     src={imageURL}
//                     alt={data[locale as LocaleType]?.name}
//                     width="100"
//                     height="100"
//                     loading="lazy"
//                 />
//             )}

//             <h1>{data[locale as LocaleType]?.name}</h1>
//             <p>{data[locale as LocaleType]?.about}</p>

//             <Button>{getTranslation("allProjects")}</Button>
//         </div>
//     );
// };
