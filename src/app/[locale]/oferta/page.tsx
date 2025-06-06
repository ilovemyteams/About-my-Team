import { OfertaContent } from "@/src/components/ofertaPage/OfertaContent";
import { TextDocHeader } from "@/src/components/shared/TextDocLayout/TextDocHeader";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "PublicOffer",
        canonical: "/oferta",
    });
}

export default function Oferta() {
    return (
        <>
            <TextDocHeader />
            <OfertaContent />
        </>
    );
}
