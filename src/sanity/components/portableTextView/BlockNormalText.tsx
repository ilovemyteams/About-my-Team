import { Text } from "@sanity/ui";
import React from "react";
import { BlockStyleProps } from "sanity";

export const BlockNormalText = (props: BlockStyleProps) => {
    console.log(props);
    return <Text size={2}>{props.children}</Text>;
};
