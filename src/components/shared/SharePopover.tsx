"use client";
import React, { useState } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ButtonShare } from "./ButtonShare";

export const SharePopover = () => {
    const getTranslation = useTranslations("SharePopover");
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="top-start">
            <PopoverTrigger>
                <Button className="absolute -top-3 right-4 bg-transparent h-12 min-w-12 px-0 flex gap-2 text-grey font-caviar tab:text-lg pc:hover:text-red pc:focus:text-red  pc:transition pc:ease-out pc:duration-300 active:text-red">
                    <ButtonShare />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="relative rounded-none w-[300px] h-[384px] p-0 bg-purple-400 border border-purple-stroke">
                <Button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-4 h-12 min-w-12 rounded-none px-0 bg-transparent"
                >
                    <Image
                        src="/images/closeX.svg"
                        alt="Close button"
                        width={24}
                        height={24}
                    />
                </Button>
                <div className="my-[72px] border-t w-[268px] h-[240px] border-purple-stroke ">
                    <p className="text-base mt-9 mb-4">
                        {getTranslation("shareLink")}
                    </p>
                    <div className="h-12 border border-purple-stroke"></div>
                    <p className="text-base mt-6 mb-4">
                        {getTranslation("copyLink")}
                    </p>
                    <div className="h-12 border border-purple-stroke "></div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
