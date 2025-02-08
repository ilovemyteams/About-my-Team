"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { useRouter } from "@/src/navigation";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

import { IconCloseX } from "../../shared/Icons/IconCloseX";

export const ValentineModal = ({
    children,
    gradientPink,
    heartPink,
    text,
}: {
    children: React.ReactNode;
    gradientPink?: boolean;
    heartPink?: boolean;
    text: string;
}) => {
    const router = useRouter();
    const { previousValentineURL } = usePreviousURL();
    const pathname = usePathname();
    const locale = useLocale();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const getTranslation = useTranslations("Valentines");

    useEffect(() => {
        const closeModal = () => {
            if (!pathname.includes("wish")) {
                setIsModalOpen(false);
            } else {
                setIsModalOpen(true);
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                router.push(previousValentineURL);
                setIsModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleEsc);

        closeModal();

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [pathname, router, locale, previousValentineURL]);

    if (!isModalOpen) return null;

    const handleClose = () => {
        router.push(previousValentineURL);
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                onClick={handleClose}
                className="w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80 fixed top-0 left-0 z-[20] no-doc-scroll"
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className={`p-0 w-[320px] pb-6 min-h-[383px] h-auto max-h-[90vh] overflow-y-auto fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 z-[21] ${gradientPink ? "bg-pinkGradient" : "bg-headerGradientLight"} scroll`}
                >
                    <div className="h-auto relative ">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="flex ml-auto text-greyLight w-10 h-10 justify-center items-center icon-hover-rounded-purple relative"
                        >
                            <IconCloseX className="stroke-[3px] size-4" />
                        </button>
                        <div className="text-black absolute top-8 left-4 w-[288px] flex justify-between items-end">
                            <p className="text-base font-segoe font-bold ">
                                {getTranslation("secondSceneWishTitle")}
                            </p>
                            <p className="font-caviar text-xxs font-bold ">
                                *{text}
                            </p>
                        </div>
                        <div className=" relative ">
                            <div
                                className={`absolute right-0 ${heartPink ? "top-[108px]" : "top-[108px]"}  z-[1]`}
                            >
                                {heartPink ? (
                                    <Image
                                        src="/images/valen/metalicHeart.png"
                                        alt="heart"
                                        width={113}
                                        height={175}
                                    />
                                ) : (
                                    <Image
                                        src="/images/valen/logoHeart.png"
                                        alt="heart"
                                        width={112}
                                        height={122}
                                    />
                                )}
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
