import { Text } from "@sanity/ui";
import { LuPencilRuler } from "react-icons/lu";
import { BlockStyleProps } from "sanity";

export const BlockSubtitleWithMark = (props: BlockStyleProps) => {
    return (
        <Text size={3} weight="semibold">
            <LuPencilRuler />
            {props.children}
        </Text>
    );
};
