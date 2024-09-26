import { useState } from "react";

import { IconLike } from "./Icons/IconLike";

type LikeButtonProps = {
    likes: number;
};

const LikeButton = ({ likes }: LikeButtonProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const toggleLike = () => {
        setIsActive(!isActive);
    };

    const likeIconStyle = isActive
        ? "text-redLight dark:text-red animate-pulsationBrokenHeart"
        : isHovered
          ? "text-redLight dark:text-red pc:transition pc:ease-out pc:duration-300"
          : "text-greyLight dark:text-grey pc:transition pc:ease-out pc:duration-300";

    return (
        <button
            onClick={toggleLike}
            className={`${isHovered ? "text-redLight dark:text-red" : "text-purple-100 dark:text-purple-50"} focus:outline-none flex items-center gap-x-2 pc:transition pc:ease-out pc:duration-300`}
            aria-label="Like button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
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
