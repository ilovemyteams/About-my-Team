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
        ? "text-redLight dark:text-red animate-pulsationBrokenHeart"
        : "text-greyLight dark:text-grey";
    return (
        <button
            onClick={toggleLike}
            className="border text-purple-100 tab:text-purple-130 dark:text-purple-50 flex gap-2"
            aria-label="Like"
        >
            <div className={`${style} my-auto`}>
                <IconLike isActive={isActive} />
            </div>
            <span className="my-auto">{likes}</span>
        </button>
    );
};

export default LikeButton;
