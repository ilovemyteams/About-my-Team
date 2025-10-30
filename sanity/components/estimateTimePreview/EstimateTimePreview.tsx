import { Text } from "@sanity/ui";
import React from "react";
import { NumberInputProps, NumberSchemaType } from "sanity";

export const EstimateTimePreview = (
    props: NumberInputProps<NumberSchemaType>
) => {
    const { value } = props;
    return <Text size={2}> {value}</Text>;
};
