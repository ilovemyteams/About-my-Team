"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    if (pathname === `/${locale}`) return null;

    return (
        <div>
            <Link
                href={`/${locale}#team`}
                className="w-full h-full bg-[rgba(3,3,3,0.8)] fixed top-0 left-0 z-[99]"
            />
            <div className="w-[320px] h-auto pb-4 overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]">
                <button
                    onClick={() => {
                        router.back();
                    }}
                    type="button"
                    className="flex my-2 ml-auto w-12 h-12 justify-center items-center "
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
    );
};
