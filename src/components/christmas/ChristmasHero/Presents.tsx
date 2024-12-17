"use client";
import { useState } from "react";

import { Button } from "../../shared/Button";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
import { DiscountModal } from "../DiscountModal/DiscountModal";

export const Presents = () => {
    const [openDiscount, setOpenDiscount] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);

    const onOpenDiscountModal = () => setOpenDiscount(true);

    const onCloseDiscountModal = () => {
        setOpenDiscount(false);
    };

    const onOpenConfirmModal = () => {
        onCloseDiscountModal();
        setOpenConfirm(true);
    };

    const onCloseConfirmModal = () => setOpenConfirm(false);
    return (
        <div>
            <Button onClick={onOpenDiscountModal}> click present</Button>
            <DiscountModal
                isOpen={openDiscount}
                onClose={onCloseDiscountModal}
                onOpenNextStep={onOpenConfirmModal}
            />
            <ConfirmModal isOpen={openConfirm} onClose={onCloseConfirmModal} />
        </div>
    );
};
