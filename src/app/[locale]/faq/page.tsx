"use client";

import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
import { Section } from "@/src/components/shared/Section";

export default function FAQ() {
    return (
        <Section id="faq">
            <FaqSectionCta />
            <QaCardList />
        </Section>
    );
}
