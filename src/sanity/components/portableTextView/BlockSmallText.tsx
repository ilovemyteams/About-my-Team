import { Text } from "@sanity/ui";
import React from "react";
import { BlockStyleProps } from "sanity";

export const BlockSmallText = (props: BlockStyleProps) => {
    return <Text size={1}>{props.children}</Text>;
};
