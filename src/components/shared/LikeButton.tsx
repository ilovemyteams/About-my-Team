import { IconLike } from "./Icons/IconLike";

type LikeButtonProps = {
    likes: number;
};

const LikeButton = ({ likes }: LikeButtonProps) => {
    return (
        <button
            className={`text-purple-100 dark:text-purple-50 hover:text-redLight dark:hover:text-red focus:text-redLight dark:focus:text-red focus:outline-none flex items-center gap-x-2 pc:transition pc:ease-out pc:duration-300`}
            aria-label="Like button"
        >
            <IconLike className={`pb-0.5 my-auto`} isActive={false} />
            {likes}
        </button>
    );
};

export default LikeButton;
