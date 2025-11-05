import { LuPencilRuler } from "react-icons/lu";
import { BlockStyleProps } from "sanity";

export const BlockSubtitleWithMark = (props: BlockStyleProps) => {
    return (
        <span
            style={{
                color: "darkgray",
                display: "flex",
                gap: "4px",
                alignItems: "center",
            }}
        >
            <LuPencilRuler />
            {props.children}
        </span>
    );
};
