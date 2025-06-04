import { PolicyContent } from "@/src/components/policyPage/PolicyContent";
import { PolicyHeader } from "@/src/components/policyPage/PolicyHeader";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "PrivacyPolicy",
        canonical: "/policy",
    });
}

export default function Policy() {
    return (
        <>
            <PolicyHeader />
            <PolicyContent />
        </>
    );
}
