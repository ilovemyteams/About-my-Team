"use client";
import React, { useState } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    WhatsappShareButton,
} from "react-share";
import { useTranslations } from "next-intl";
import { IconShare } from "./Icons/IconShare";

export const SharePopover = ({
    className,
    id,
    trigerShowShareText,
}: {
    className: string;
    id?: string;
    trigerShowShareText: boolean;
}) => {
    const getTranslation = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
    };
    const pathname = window.location.pathname;
    const urlShare = id
        ? window.location.origin + pathname + `#${id}`
        : window.location.origin + pathname;
    console.log(urlShare);

    return (
        <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="top-start">
            <PopoverTrigger>
                <button
                    className={`bg-transparent h-12 min-w-12 justify-center items-center focus:outline-none px-0 flex gap-2 text-grey font-caviar tab:text-lg pc:hover:text-red  pc:transition pc:ease-out pc:duration-300 active:text-red ${className}`}
                >
                    <p
                        className={
                            trigerShowShareText
                                ? `hidden pc:block tab:border-b tab:border-current`
                                : `hidden tab:block tab:border-b tab:border-current`
                        }
                    >
                        {getTranslation("Buttons.share")}
                    </p>
                    <IconShare />
                </button>
            </PopoverTrigger>
            <PopoverContent className="relative rounded-none w-[300px] h-[384px] p-0 border-purple-stroke">
                <Image
                    src="/images/bgImages/shareMob.svg"
                    fill
                    alt="background image"
                    className="object-cover absolute inset-0 w-[300px] h-[384px] z-[-10] "
                />
                <Button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-4 h-12 min-w-12 rounded-none px-0 bg-transparent icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within icon-hover-rounded-purple:active"
                >
                    <Image
                        src="/images/closeX.svg"
                        alt="Close button"
                        width={24}
                        height={24}
                    />
                </Button>
                <div className="flex flex-col border-t w-[268px]  border-purple-stroke ">
                    <p className="text-base mt-9 mb-4">
                        {getTranslation("SharePopover.shareLink")}
                    </p>
                    <div className=" h-12 border border-purple-stroke">
                        <ul className="flex ">
                            <li className=" flex w-[72px] h-12 justify-center items-center border-r border-purple-stroke">
                                <TelegramShareButton url={urlShare}>
                                    <Image
                                        src="/images/telegramIcon.svg"
                                        alt="Telegram Icon"
                                        width={20}
                                        height={16}
                                    />
                                </TelegramShareButton>
                            </li>
                            <li className=" flex w-[72px] h-12 justify-center items-center border-r border-purple-stroke">
                                <FacebookShareButton url={urlShare}>
                                    <Image
                                        src="/images/fbIcon.svg"
                                        alt="Facebook Icon"
                                        width={10.5}
                                        height={20}
                                    />
                                </FacebookShareButton>
                            </li>
                            <li className=" flex w-[72px] h-12 justify-center items-center border-r border-purple-stroke">
                                <LinkedinShareButton url={urlShare}>
                                    <Image
                                        src="/images/linkedin.svg"
                                        alt="Linkedin Icon"
                                        width={24}
                                        height={24}
                                    />
                                </LinkedinShareButton>
                            </li>
                            <li className=" flex w-[72px] h-12 justify-center items-center">
                                <WhatsappShareButton url={urlShare}>
                                    <Image
                                        src="/images/whatsAppIcon.svg"
                                        alt="WhatsApp Icon"
                                        width={24}
                                        height={24}
                                    />
                                </WhatsappShareButton>
                            </li>
                        </ul>
                    </div>
                    <p className="text-base mt-9 mb-4">
                        {getTranslation("SharePopover.copyLink")}
                    </p>
                    <div className="h-12 border border-purple-stroke "></div>
                </div>
            </PopoverContent>
        </Popover>
    );
};
