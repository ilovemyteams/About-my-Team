"use client";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

import { LikesTypes } from "@/src/utils/jsonDataHandler";

import { IconLike } from "./Icons/IconLike";

type LikeButtonProps = {
    likes: LikesTypes[];
    questionSlug: string;
};

const LikeButton = ({
    likes: serverSavedLikes,
    questionSlug,
}: LikeButtonProps) => {
    const [likes, setLikes] = useState(serverSavedLikes);
    const [userId, setUserId] = useState<null | string>(null);
    const isUserVoted = useMemo(() => {
        return !!likes.find(item => item.userId === userId);
    }, [likes, userId]);

    useEffect(() => {
        const persistedUserId = localStorage.getItem("userId");
        setUserId(persistedUserId);
    }, []);

    const onClickBtn = async () => {
        const userIdForSaving =
            userId || Math.floor(Math.random() * Date.now()).toString(16);
        if (!userId) {
            localStorage.setItem("userId", userIdForSaving);

            setUserId(userIdForSaving);
        }

        const likeObject = {
            userId: userIdForSaving,
            questionSlug,
        };

        if (isUserVoted) {
            try {
                await axios.delete(
                    `api/likesData?questionSlug=${questionSlug}&userId=${userIdForSaving}`
                );
                const newLikes = likes.filter(
                    item =>
                        !(
                            item.questionSlug === questionSlug &&
                            item.userId === userIdForSaving
                        )
                );
                setLikes(newLikes);
            } catch (error) {
                return error;
            }
        } else {
            try {
                await axios.post("api/likesData", likeObject);
                const newLikes = [...likes, likeObject];
                setLikes(newLikes);
            } catch (error) {
                return error;
            }
        }
    };
    return (
        <button
            className={`text-purple-100 dark:text-purple-50 hover:text-redLight dark:hover:text-red focus:text-redLight dark:focus:text-red focus:outline-none flex items-center gap-x-2 pc:transition pc:ease-out pc:duration-300`}
            aria-label="Like button"
            onClick={onClickBtn}
        >
            <IconLike className={`pb-0.5 my-auto `} isActive={isUserVoted} />
            {likes.length}
        </button>
    );
};

export default LikeButton;
