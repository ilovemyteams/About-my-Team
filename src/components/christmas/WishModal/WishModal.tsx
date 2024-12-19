"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

import { IconCloseX } from "../../shared/Icons/IconCloseX";

export const WishModal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const PREVIOUSURL = `/${locale}/events`;

    const [isModalOpen, setIsModalOpen] = useState(true);

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
                router.push(PREVIOUSURL);
                setIsModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleEsc);

        closeModal();

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [pathname, router, locale, PREVIOUSURL]);

    if (!isModalOpen) return null;

    const handleClose = () => {
        router.push(PREVIOUSURL);
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
                    className="p-0 min-w-[281px] w-[90vw] tab:w-[47vw] max-w-[360px] tab:min-w-[360px] tab:max-w-[505px] pc:max-w-[660px] h-auto max-h-[90vh] overflow-y-auto fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 z-[21] bg-transparent scroll"
                >
                    <div className="h-auto relative ">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="flex mb-2 ml-auto mr-[6%] tab:mr-[8%] tab:mb-3 w-12 h-12 justify-center items-center icon-hover-rounded-purple relative"
                        >
                            <IconCloseX className="stroke-[3px] size-6" />
                        </button>
                        <div className=" relative">
                            <Image
                                src="/images/christmas/envelope.png"
                                alt="envelopeAlt"
                                width={653}
                                height={827}
                                priority
                                className="min-w-[281px] w-[80vw] tab:w-[47vw] max-w-[360px] h-auto mx-auto tab:min-w-[360px] tab:max-w-[500px] pc:max-w-[653px]"
                            />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
