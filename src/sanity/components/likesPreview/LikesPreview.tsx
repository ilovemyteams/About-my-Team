import { Text } from "@sanity/ui";
import React from "react";
import { useFormValue } from "sanity";

export const LikesPreview = () => {
    const userIds = useFormValue(["likedUserList"]) as string[] | undefined;
    const count = userIds?.length || 0;

    return <Text size={2}> {count}</Text>;
};
