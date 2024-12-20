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
    const PREVIOUSURL = `/${locale}/events#tree`;

    const [isModalOpen, setIsModalOpen] = useState(false); // Модалка починається закритою
    const [isVisible, setIsVisible] = useState(false); // Стан для анімації

    useEffect(() => {
        const closeModal = () => {
            if (!pathname.includes("wish")) {
                setIsModalOpen(false);
            } else {
                setIsModalOpen(true);
                setTimeout(() => setIsVisible(true), 50); // Додаємо невелику затримку для плавної появи
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsVisible(false); // Почати анімацію закриття
                setTimeout(() => {
                    router.push(PREVIOUSURL);
                    setIsModalOpen(false);
                }, 300); // Час відповідає тривалості анімації
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
        setIsVisible(false); // Почати анімацію закриття
        setTimeout(() => {
            router.push(PREVIOUSURL);
            setIsModalOpen(false);
        }, 300); // Час відповідає тривалості анімації
    };

    return (
        <div>
            <div
                onClick={handleClose}
                arial-label="modal backdrop"
                className={`w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80 fixed top-0 left-0 z-[20] transition-opacity duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <div
                    onClick={e => e.stopPropagation()}
                    aria-label="modal window"
                    className={`p-0 min-w-[281px] w-[95vw] h-auto tab:w-[47vw] max-w-[360px] tab:min-w-[360px] tab:max-w-[505px] aspect-[499/696] pc:max-w-[95vw] pc:w-auto pc:h-[95dvh] pc:max-h-[696px] desk:max-h-[826px] fixed top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 z-[21] bg-transparent transition-transform duration-300 ${
                        isVisible ? "scale-100" : "scale-95"
                    }`}
                >
                    <div className="h-full relative">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="flex mb-2 ml-auto mr-[6%] tab:mr-[8%] tab:mb-3 w-12 h-12 justify-center items-center icon-hover-rounded-purple relative"
                        >
                            <IconCloseX className="stroke-[3px] size-6" />
                        </button>
                        <div className="relative h-full">
                            <Image
                                src="/images/christmas/envelope.png"
                                alt="envelopeAlt"
                                width={653}
                                height={827}
                                priority
                                className="w-full mx-auto h-auto pc:max-h-full pc:h-full pc:w-auto"
                            />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
