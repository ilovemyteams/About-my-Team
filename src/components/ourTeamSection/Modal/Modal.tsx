"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { BgImagesDesktop } from "../../shared/WriteUs/modalBgImages/writeUsBgImages/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/WriteUs/modalBgImages/writeUsBgImages/BgImagesMobile";
import { BgImagesTablet } from "../../shared/WriteUs/modalBgImages/writeUsBgImages/BgImagesTablet";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    if (pathname === `/${locale}`) return null;

    return (
        <div>
            <Link
                href={`/${locale}#team`}
                className="w-full h-full bg-[rgba(3,3,3,0.8)] fixed top-0 left-0 z-[20] no-doc-scroll"
                scroll={false}
            />
            <div className="p-0 min-w-[320px] w-[90vw] max-w-[360px] tab:min-w-[768px] tab:w-[768px] h-auto max-h-[95vh]   overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[21] bg-purple-400">
                <div className="h-auto relative pb-[64px] pt-2 tab:pb-[72px] tab:pt-3">
                    <BgImagesMobile />
                    <BgImagesTablet />
                    <BgImagesDesktop />
                    <button
                        onClick={() => {
                            router.push(`/${locale}#team`);
                        }}
                        onTouchStart={() => {
                            router.push(`/${locale}#team`);
                        }}
                        type="button"
                        className="flex mb-2 ml-auto mr-4 tab:mr-6 tab:mb-3 w-12 h-12 justify-center items-center 
                    icon-hover-rounded-purple relative"
                    >
                        <Image
                            src="/images/closeX.svg"
                            alt="Close button"
                            width={24}
                            height={24}
                        />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};
