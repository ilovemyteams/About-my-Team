"use client";

import { sendGTMEvent } from "@next/third-parties/google";

import { Button } from "@/src/components/shared/Button";
import { useRouter } from "@/src/navigation";
import { usePathname } from "@/src/navigation";

interface ServiceCtaButtonProps {
    title: string;
}

export const ServiceCtaButton = ({ title }: ServiceCtaButtonProps) => {
    const router = useRouter();

    const path = usePathname();

    const onClickButton = () => {
        router.push(`/order`);
        sendGTMEvent({
            event: "order_form_start",
            page_location: path,
        });
    };

    return <Button onClick={onClickButton}>{title}</Button>;
};
