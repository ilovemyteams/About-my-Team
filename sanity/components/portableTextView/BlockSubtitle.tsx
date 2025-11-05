import React from "react";
import { BlockStyleProps } from "sanity";

export const BlockSubtitle = (props: BlockStyleProps) => {
    return (
        <span style={{ color: "purple", fontWeight: 700 }}>
            {props.children}
        </span>
    );
};
