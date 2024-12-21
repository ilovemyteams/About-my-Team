import { useTranslations } from "next-intl";
import { useState } from "react";

import { IconRibbon } from "../../shared/Icons/christmas/IconRibbon";
import { IconCloseX } from "../../shared/Icons/IconCloseX";
import { ModalBase } from "../../shared/Modals/ModalBase";
import { Background } from "./Background";

interface DiscountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenNextStep: () => void;
    discount: number | null;
}

export const DiscountModal = ({
    isOpen,
    onClose,
    onOpenNextStep,
    discount,
}: DiscountModalProps) => {
    const getTranslation = useTranslations("Christmas");
    const [isError, setIsError] = useState(false);

    const onCloseDiscountModal = () => {
        onClose();
    };

    const onClickNextStep = () => {
        const isSend = localStorage.getItem("confirm");
        if (isSend) {
            setIsError(true);
            return;
        }
        onOpenNextStep();
    };
    return (
        <ModalBase
            isOpen={isOpen}
            onCloseModal={onCloseDiscountModal}
            appearance="center"
            isCloseBtnVisible={false}
            widthStyle="min-w-[320px] max-w-[360px] tab:min-w-[464px]"
            mobilePosition="center"
            isScrollBlock={true}
        >
            <Background />
            <button
                onClick={onCloseDiscountModal}
                type="button"
                className="absolute top-[16px] right-[16px] text-greyLight dark:text-grey flex w-12 h-12 justify-center items-center icon-hover-rounded-purple"
            >
                <IconCloseX className="stroke-[2px] size-6" />
            </button>
            <IconRibbon className="absolute top-0 left-[50%] w-[176px] tab:w-[256px] -translate-x-1/2 translate-y-[-40%]" />

            <div className="relative z-[10] pt-[50px] pb-[16px] tab:pt-[60px] tab:pb-[20px] text-center">
                <p className="font-caviar dark:text-white-200 text-purple-stroke  font-bold leading-none text-[80px] tab:text-[100px] ">
                    -{discount || 5}%
                </p>
                <h3 className="dark:text-white-200  text-purple-200 text-base tab:text-2xl mb-[64px]">
                    {getTranslation("discountTitle")}
                </h3>

                <button
                    className="text-xl tab:text-2xl text-redLight dark:text-red cursor-pointer"
                    onClick={onClickNextStep}
                    disabled={isError}
                >
                    {getTranslation("discountBtn")}
                </button>
                <div className="relative w-full">
                    {isError && (
                        <p className="absolute top-2 text-xs  text-error">
                            *{getTranslation("discountError")}
                        </p>
                    )}
                </div>
            </div>
        </ModalBase>
    );
};
