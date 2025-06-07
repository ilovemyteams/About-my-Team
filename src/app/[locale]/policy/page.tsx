import { PolicyContent } from "@/src/components/policyPage/PolicyContent";
import { TextDocHeader } from "@/src/components/shared/TextDocLayout/TextDocHeader";
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
            <TextDocHeader />
            <PolicyContent />
        </>
    );
}
