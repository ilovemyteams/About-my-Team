"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "../../../shared/Button";
import { IconCloseX } from "../../../shared/Icons/IconCloseX";
import { ColoredText } from "../../shared/ColoredText";
import { Background } from "./Background";
import { Decoration } from "./Decoration";

interface GreetingModalProps {
    onCloseModal: () => void;
}

export const GreetingModal = ({ onCloseModal }: GreetingModalProps) => {
    const getTranslation = useTranslations("Christmas");

    return (
        <div className="overflow-hidden h-auto mx-auto mt-[15%]">
            <Background />
            <Decoration />
            <button
                type="button"
                onClick={onCloseModal}
                aria-label="close button"
                className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple "
            >
                <IconCloseX className="text-white-100 " />
            </button>
            <div className="text-center whitespace-pre-wrap">
                <h1 className="font-intro mb-[18px] tab:mb-4 pc:mb-3 text-5xln">
                    {getTranslation("greetingTitle")}
                </h1>
                <ColoredText
                    propName={"greetingText"}
                    className="text-xl py-3"
                />
                <p className=" text-redLight dark:text-red mb-[25px] desk:text-lg25 text-sm tab:text-base max-w-[80%] mx-auto">
                    {getTranslation("greetingCaption")}
                </p>
                <Link href="/events">
                    <Button color="grey" onClick={onCloseModal}>
                        {getTranslation("greetingBtn")}
                    </Button>
                </Link>
            </div>
        </div>
    );
};
