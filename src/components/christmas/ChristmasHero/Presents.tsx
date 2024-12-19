"use client";
import { useRef, useState } from "react";

import { generateRandomDiscount } from "@/src/utils/generateRandomDiscount";

import { IconPresentGrey } from "../../shared/Icons/christmas/IconPresentGrey";
import { IconPresentPurple } from "../../shared/Icons/christmas/IconPresentPurple";
import { IconPresentViolet } from "../../shared/Icons/christmas/IconPresentViolet";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
import { DiscountModal } from "../DiscountModal/DiscountModal";
import { ChristmasPresentButton } from "./ChristmasPresentButton";

// ToDo: after sending confirmation - set null to ref
//ToDo: save in localStorage if discount was confirmed
export const Presents = () => {
    const [openDiscount, setOpenDiscount] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const discount = useRef<null | number>(null);

    const onOpenDiscountModal = () => {
        discount.current = generateRandomDiscount();
        setOpenDiscount(true);
    };

    const onCloseDiscountModal = () => {
        setOpenDiscount(false);
    };

    const onOpenConfirmModal = () => {
        onCloseDiscountModal();
        setOpenConfirm(true);
    };

    const onCloseConfirmModal = () => {
        setOpenConfirm(false);
    };
    return (
        <>
            <ChristmasPresentButton
                id="greyPresentMiddle"
                className="bottom-[8%] left-[29%] w-[57px] tab:w-[104px] desk:w-[116px]"
                icon={IconPresentGrey}
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="greyPresentLeft"
                className="bottom-[7.5%] left-[9%] w-[53px] tab:w-[99px] desk:w-[108px]"
                icon={IconPresentGrey}
                iconStyle="scale-y-[1.2] scale-x-[0.9] skew-y-[10deg] rotate-[20deg]"
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="purplePresentRight"
                className="bottom-[5%] right-[11%] w-[34px] tab:w-[65px] desk:w-[85px]"
                icon={IconPresentPurple}
                onClick={onOpenDiscountModal}
                iconStyle="rotate-[-15deg]"
            />
            <ChristmasPresentButton
                id="purplePresentMiddle"
                className="bottom-[14%] right-[40%] w-[25px] tab:w-[35px] desk:w-[56px]"
                icon={IconPresentPurple}
                iconStyle="rotate-[15deg] scale-y-[1.1]"
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="purplePresentLeft"
                className="bottom-[5%] left-[8%] w-[20px] tab:w-[34px] desk:w-[43px]"
                icon={IconPresentPurple}
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="greyPresentWider"
                className="bottom-[10%] right-[31%] w-[38px] tab:w-[64px] desk:w-[77px]"
                icon={IconPresentGrey}
                iconStyle="rotate-[20deg] scale-x-[1.1]"
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="violetPresentMiddle"
                className="bottom-[8%] right-[48%] w-[33px] tab:w-[60px] desk:w-[76px]"
                icon={IconPresentViolet}
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="violetPresentLeft"
                className="bottom-[5%] left-[21%] w-[43px] tab:w-[76px] desk:w-[86px]"
                icon={IconPresentViolet}
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="violetPresentRight"
                className="bottom-[8%] right-[19%] w-[43px] tab:w-[79px] desk:w-[89px]"
                icon={IconPresentViolet}
                iconStyle="rotate-[10deg] scale-y-[1.2]"
                onClick={onOpenDiscountModal}
            />
            <ChristmasPresentButton
                id="greyPresentCenter"
                className="bottom-[6%] right-[40%] w-[36px] tab:w-[66px] desk:w-[70px]"
                icon={IconPresentGrey}
                iconStyle="scale-y-[1.2]"
                onClick={onOpenDiscountModal}
            />
            <DiscountModal
                isOpen={openDiscount}
                onClose={onCloseDiscountModal}
                onOpenNextStep={onOpenConfirmModal}
                discount={discount.current}
            />
            <ConfirmModal isOpen={openConfirm} onClose={onCloseConfirmModal} />
        </>
    );
};
