"use client";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

import { generateUserId } from "@/src/utils/generateUserId";
import { LikesTypes } from "@/src/utils/likeDataHandler";

import { IconLike } from "./Icons/IconLike";

type LikeButtonProps = {
    likes: LikesTypes[];
    questionSlug: string;
};

const LikeButton = ({
    likes: serverSavedLikes,
    questionSlug,
}: LikeButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const [likes, setLikes] = useState(serverSavedLikes);
    const [userId, setUserId] = useState<null | string>(null);
    const isUserVoted = useMemo(() => {
        return !!likes.find(item => item.userId === userId);
    }, [likes, userId]);

    useEffect(() => {
        const persistedUserId = localStorage.getItem("userId");
        setUserId(persistedUserId);
    }, []);

    const deleteLike = useCallback(
        async (questionSlug: string, userId: string) => {
            const newLikes = likes.filter(
                item =>
                    !(
                        item.questionSlug === questionSlug &&
                        item.userId === userId
                    )
            );
            setLikes(newLikes);
            try {
                await axios.delete(
                    `/api/likesData?questionSlug=${questionSlug}&userId=${userId}`
                );
            } catch (error) {
                return error;
            } finally {
                setIsLoading(false);
            }
        },
        [likes]
    );

    const addLike = useCallback(
        async (questionSlug: string, userId: string) => {
            setStartAnimation(true);
            const likeObject = {
                userId,
                questionSlug,
            };
            const newLikes = [...likes, likeObject];
            setLikes(newLikes);
            try {
                await axios.post("/api/likesData", likeObject);
            } catch (error) {
                return error;
            } finally {
                setIsLoading(false);
            }
        },
        [likes]
    );

    const onClickBtn = useCallback(async () => {
        const userIdForSaving = userId || generateUserId();
        setIsLoading(true);
        if (!userId) {
            localStorage.setItem("userId", userIdForSaving);
            setUserId(userIdForSaving);
        }

        if (isUserVoted) {
            await deleteLike(questionSlug, userIdForSaving);
        } else {
            await addLike(questionSlug, userIdForSaving);
        }
    }, [userId, isUserVoted, addLike, questionSlug, deleteLike]);

    return (
        <button
            className={`h-[40px] mb-2 tab:mb-0 text-purple-100 dark:text-purple-50 hover:text-redLight dark:hover:text-red focus-within:text-redLight dark:focus-within:text-red focus-within:outline-none flex items-center  pc:transition pc:ease-out pc:duration-300 disabled:cursor-default`}
            aria-label="Like button"
            onClick={onClickBtn}
            disabled={isLoading}
            onAnimationEnd={() => setStartAnimation(false)}
        >
            <span className="flex items-end gap-x-2">
                <IconLike
                    isLiked={isUserVoted || startAnimation}
                    className={`${isUserVoted || startAnimation ? "text-redLight dark:text-red" : "text-inherit"}  ${startAnimation ? "animate-pulsationBrokenHeart" : "animate-none"} `}
                />
                <span className="leading-[20px]"> {likes.length}</span>
            </span>
        </button>
    );
};

export default LikeButton;
