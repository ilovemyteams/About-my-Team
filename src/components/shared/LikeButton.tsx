import { useState } from "react";

import { IconLike } from "./Icons/IconLike";

type LikeButtonProps = {
    likes: number;
};

const LikeButton = ({ likes }: LikeButtonProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleLike = () => {
        setIsActive(!isActive);
    };

    const style = isActive ? "text-red mb-1" : "text-grey mb-1";
    return (
        <button
            onClick={toggleLike}
            className="flex items-center gap-2 mx-[3px] my-2"
        >
            <div className={style}>
                <IconLike />
            </div>
            <span>{likes}</span>
        </button>
    );
};

export default LikeButton;