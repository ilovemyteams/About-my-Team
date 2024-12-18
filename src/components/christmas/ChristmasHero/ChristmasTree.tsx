import React from "react";

import { IconTree } from "../../shared/Icons/IconTree";

export const ChristmasTree = () => {
    // width of tree is not matched by design for huge screens
    return (
        <div className="pt-[80px] tab:pt-[120px] pc:pt-0 pc:pl-[50px]">
            <IconTree className="w-[249px] h-auto mx-auto tab:w-[468px] pc:w-[464px] desk:w-[505px]" />
        </div>
    );
};
