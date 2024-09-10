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

    const style = isActive
        ? "text-red mb-1 animate-pulsationBrokenHeart"
        : "text-grey mb-1";
    return (
        <button
            onClick={toggleLike}
            className="text-purple-50 flex items-center gap-2 mx-[3px] my-2"
            aria-label="Like"
        >
            <div className={style}>
                <IconLike isActive={isActive} />
            </div>
            <span>{likes}</span>
        </button>
    );
};

export default LikeButton;
