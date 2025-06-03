// import { generatePageMetadata } from "@/src/utils/generateMetaData";
import { PolicyContent } from "@/src/components/policyPage/PolicyContent";
import { PolicyHeader } from "@/src/components/policyPage/PolicyHeader";

// export async function generateMetadata({
//     params: { locale },
// }: {
//     params: { locale: string };
// }) {
//     // return generatePageMetadata({
//     //     locale,
//     //     namespace: "AboutPage",
//     //     canonical: "/about",
//     // });
// }

export default function Policy() {
    return (
        <>
            <PolicyHeader />
            <PolicyContent />
        </>
    );
}
