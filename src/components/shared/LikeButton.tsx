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

    const likeIconStyle = isActive
        ? "text-redLight dark:text-red animate-pulsationBrokenHeart"
        : "text-greyLight dark:text-grey";
    return (
        <button
            onClick={toggleLike}
            className="text-purple-100 tab:text-purple-130 dark:text-purple-50 flex items-center gap-x-2"
            aria-label="Like button"
        >
            <IconLike
                className={`pb-0.5 ${likeIconStyle} my-auto`}
                isActive={isActive}
            />
            {likes}
        </button>
    );
};

export default LikeButton;
