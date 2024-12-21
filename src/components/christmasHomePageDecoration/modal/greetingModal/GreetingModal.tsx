"use client";

import { useTranslations } from "next-intl";

import { ColoredText } from "@/src/components/christmas/shared/ColoredText";
import { Link } from "@/src/navigation";

import { Button } from "../../../shared/Button";
import { IconCloseX } from "../../../shared/Icons/IconCloseX";
import { Background } from "./background/Background";
import { Decoration } from "./Decoration";

interface GreetingModalProps {
    onCloseModal: () => void;
}

export const GreetingModal = ({ onCloseModal }: GreetingModalProps) => {
    const getTranslation = useTranslations("Christmas");

    return (
        <div className="overflow-hidden h-auto mx-auto mt-[99px] tab:mt-[98px] pc:mt-[83px] desk:mt-[51px]">
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
                <h1 className="font-intro mb-3 tab:mb-4 pc:mb-3 text-3xl/[33px] tab:text-[36px]/[43px] pc:text-5xl/[48px] desk:text-6xl/[58px] text-purple-200 dark:text-white-200">
                    {getTranslation("greetingTitle")}
                </h1>
                <ColoredText
                    propName={"greetingText"}
                    className="font-caviar text-baseb tab:text-lg pc:text-xl desk:text-2xl text-greyLight dark:text-grey mb-5 pc:mb-4"
                />
                <p className=" text-purple-130 dark:text-purple-100 mb-[35px] tab:mb-[25px] desk:text-lg25 text-sm tab:text-base desk:text-lg desk:font-[400] max-w-[80%] mx-auto">
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
