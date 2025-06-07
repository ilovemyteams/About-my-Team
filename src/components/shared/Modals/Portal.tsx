import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import usePortal from "@/src/hooks/usePortal";

interface PortalProps {
    id: string;
}

export const Portal = ({ id, children }: PropsWithChildren<PortalProps>) => {
    const target = usePortal(id);
    return createPortal(children, target);
};
