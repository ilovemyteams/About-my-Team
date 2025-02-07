import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { RefObject } from "react";

import { ArrowIcon } from "../icons/ArrowIcon";
import { FlyingEnvelope } from "../shared/FlyingEnvelope";

interface CertificateProps {
    captionRef: RefObject<HTMLDivElement>;
    onClickCertificate: () => void;
    disabled: boolean;
}

export const Certificate = ({
    captionRef,
    onClickCertificate,
    disabled,
}: CertificateProps) => {
    const getTranslation = useTranslations("Valentines");

    const onClikWithTag = () => {
        onClickCertificate();
        sendGTMEvent({
            event: "start_form_certificate",
        });
    };
    return (
        <div className="w-full h-auto relative">
            <div
                className="absolute bottom-[100%] right-0 translate-y-[-50%] text-right mb-10 tab:mb-10 pc:mb-14 opacity-0"
                ref={captionRef}
            >
                <p className="font-segoe text-xxs tab:text-sm pc:text-xl whitespace-nowrap">
                    {getTranslation("certificateHere")}
                </p>
                <ArrowIcon className="absolute right-[15%] top-[20px] w-[30px] h-auto tab:w-[35px] pc:top-[25px] pc:w-[45px]" />
            </div>
            <div className="w-[85%] mx-auto pc:w-full">
                <button onClick={onClikWithTag} disabled={disabled}>
                    <FlyingEnvelope
                        className="rotate-[15deg] transform-x-[5%] tab:transform-x-0 cursor-pointer 
            max-w-[300px] tab:max-w-[350px] pc:max-w-[500px] pb-[3%]"
                        envelope="pink"
                    />
                </button>
            </div>
        </div>
    );
};
