"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import { Button } from "../../shared/Button";
import { Table } from "../../shared/Table/Table";
import { TableItemsList } from "../../shared/Table/TableItemsList";

export const StagesTableMob = () => {
    const getTranslation = useTranslations("Stages");
    const [itemsToShow, setItemsToShow] = useState(false);
    const tableRef = useRef<HTMLDivElement>(null);
    const stagesItems = [
        {
            title: getTranslation("firstStepTitle"),
            text: getTranslation("firstStepText"),
            itemNumber: 1,
        },
        {
            title: getTranslation("secondStepTitle"),
            text: getTranslation("secondStepText"),
            itemNumber: 2,
        },
        {
            title: getTranslation("thirdStepTitle"),
            text: getTranslation("thirdStepText"),
            itemNumber: 3,
        },
        {
            title: getTranslation("fourthStepTitle"),
            text: getTranslation("fourthStepText"),
            itemNumber: 4,
        },
        {
            title: getTranslation("fifthStepTitle"),
            text: getTranslation("fifthStepText"),
            itemNumber: 5,
        },

        {
            title: getTranslation("sixthStepTitle"),
            text: getTranslation("sixthStepText"),
            itemNumber: 6,
        },
        {
            title: getTranslation("seventhStepTitle"),
            text: getTranslation("seventhStepText"),
            itemNumber: 7,
        },
    ];
    const alwaysVisibleItems = stagesItems.slice(0, 3);
    const expandableItems = stagesItems.slice(3);
    const handleToggle = () => {
        if (itemsToShow) {
            setItemsToShow(false);
            setTimeout(() => {
                tableRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 0);
        } else {
            setItemsToShow(true);
        }
    };

    return (
        <>
            <div ref={tableRef}>
                <Table>
                    <TableItemsList
                        items={alwaysVisibleItems}
                        isIconShown={false}
                        isShowMoreButton={false}
                        textClassName="line-clamp-none max-h-full"
                        sectionClassName="first-of-type:border-t-[1px] [&:nth-child(5)]:hidden pc:[&:nth-child(5)]:block pc:[&:nth-child(5)]:border-b-0"
                    />
                    <AnimatePresence initial={false}>
                        {itemsToShow && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="overflow-hidden"
                            >
                                <TableItemsList
                                    items={expandableItems}
                                    isIconShown={false}
                                    isShowMoreButton={false}
                                    textClassName="line-clamp-none max-h-full"
                                />
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </Table>
            </div>
            {expandableItems.length > 0 && (
                <div className="flex justify-center tab:justify-end mt-4">
                    <Button color="grey" onClick={handleToggle}>
                        {itemsToShow
                            ? getTranslation("coverStages")
                            : getTranslation("allStages")}
                    </Button>
                </div>
            )}
        </>
    );
};
