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
import CopyLinkButton from "./CopyLinkButton";

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
    const siteTitle = getTranslation("Home.title");
    const siteDescription = getTranslation("Home.description");
    const pathname =
        typeof window !== "undefined" ? window.location.pathname : "";
    const urlShare = id
        ? typeof window !== "undefined"
            ? window.location.origin + pathname + `#${id}`
            : ""
        : typeof window !== "undefined"
          ? window.location.origin + pathname
          : "";
    const shareButtonStyles =
        "relative flex justify-center items-center w-12 h-12 icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within icon-hover-rounded-purple:active";
    return (
        <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="top-start">
            <PopoverTrigger>
                <button
                    aria-label="share button"
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
            <PopoverContent className="relative rounded-none w-[300px] tab:w-[408px] h-[384px] p-0 border-purple-stroke">
                <Image
                    src="/images/bgImages/shareMob.svg"
                    fill
                    priority
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
                <div className="flex flex-col border-t w-[268px] tab:w-[360px] border-purple-stroke ">
                    <p className="text-base mt-9 mb-4">
                        {getTranslation("SharePopover.shareLink")}
                    </p>
                    <div className=" h-12 border border-purple-stroke">
                        <ul className="flex ">
                            <li className="flex w-[72px] tab:w-[90px] h-12 justify-center items-center border-r border-purple-stroke">
                                <TelegramShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                >
                                    <Image
                                        src="/images/telegramIcon.svg"
                                        alt="Telegram Icon"
                                        width={20}
                                        height={16}
                                    />
                                </TelegramShareButton>
                            </li>
                            <li className=" flex w-[72px] tab:w-[90px] h-12 justify-center items-center border-r border-purple-stroke">
                                <FacebookShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                >
                                    <Image
                                        src="/images/fbIcon.svg"
                                        alt="Facebook Icon"
                                        width={10.5}
                                        height={20}
                                    />
                                </FacebookShareButton>
                            </li>
                            <li className=" flex w-[72px] tab:w-[90px] h-12 justify-center items-center border-r border-purple-stroke">
                                <LinkedinShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                    summary={siteDescription}
                                >
                                    <Image
                                        src="/images/linkedin.svg"
                                        alt="Linkedin Icon"
                                        width={24}
                                        height={24}
                                    />
                                </LinkedinShareButton>
                            </li>
                            <li className=" flex w-[72px] tab:w-[90px] h-12 justify-center items-center">
                                <WhatsappShareButton
                                    url={urlShare}
                                    className={shareButtonStyles}
                                    title={`${siteTitle} ${id ? `#${id}` : ``}`}
                                    separator=" - "
                                >
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
                    <CopyLinkButton link={urlShare}>
                        <div className="flex h-12 border border-purple-stroke ">
                            <div className=" flex w-[240px] tab:w-[312px] h-12 px-[14px] justify-start items-center gap-[6px]">
                                <Image
                                    src="/images/linkIcon.svg"
                                    alt="Link Icon"
                                    width={20}
                                    height={20}
                                />
                                <p className="w-[180px] tab:w-[250px] truncate text-start">
                                    {urlShare}
                                </p>
                            </div>

                            <div
                                className={`${shareButtonStyles} border-l border-purple-stroke`}
                            >
                                <Image
                                    src="/images/copyIcon.svg"
                                    alt="Close button"
                                    width={18}
                                    height={20}
                                />
                            </div>
                        </div>
                    </CopyLinkButton>
                </div>
            </PopoverContent>
        </Popover>
    );
};
