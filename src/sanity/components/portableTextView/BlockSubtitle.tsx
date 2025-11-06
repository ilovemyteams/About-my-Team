import { Text } from "@sanity/ui";
import React from "react";
import { BlockStyleProps } from "sanity";

export const BlockSubtitle = (props: BlockStyleProps) => {
    return (
        <Text size={3} weight="semibold">
            {props.children}
        </Text>
    );
};
