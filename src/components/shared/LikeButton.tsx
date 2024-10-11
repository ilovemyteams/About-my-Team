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
    const [likes, setLikes] = useState(serverSavedLikes);
    const [userId, setUserId] = useState<null | string>(null);
    const isUserVoted = useMemo(() => {
        return !!likes.find(item => item.userId === userId);
    }, [likes, userId]);

    useEffect(() => {
        const persistedUserId = localStorage.getItem("userId");
        setUserId(persistedUserId);
    }, []);

    const addLike = useCallback(
        async (questionSlug: string, userId: string) => {
            try {
                await axios.delete(
                    `api/likesData?questionSlug=${questionSlug}&userId=${userId}`
                );
                const newLikes = likes.filter(
                    item =>
                        !(
                            item.questionSlug === questionSlug &&
                            item.userId === userId
                        )
                );
                setLikes(newLikes);
            } catch (error) {
                return error;
            } finally {
                setIsLoading(false);
            }
        },
        [likes]
    );

    const deleteLike = useCallback(
        async (questionSlug: string, userId: string) => {
            const likeObject = {
                userId,
                questionSlug,
            };
            try {
                await axios.post("api/likesData", likeObject);
                const newLikes = [...likes, likeObject];
                setLikes(newLikes);
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
            await addLike(questionSlug, userIdForSaving);
        } else {
            await deleteLike(questionSlug, userIdForSaving);
        }
    }, [userId, isUserVoted, addLike, questionSlug, deleteLike]);

    return (
        <button
            className={`text-purple-100 dark:text-purple-50 hover:text-redLight dark:hover:text-red focus-within:text-redLight dark:focus-within:text-red focus-within:outline-none flex items-center gap-x-2 pc:transition pc:ease-out pc:duration-300 disabled:cursor-wait`}
            aria-label="Like button"
            onClick={onClickBtn}
            disabled={isLoading}
        >
            <IconLike
                className={`pb-0.5 my-auto ${isUserVoted ? "text-redLight dark:text-red" : "text-inherit"} `}
            />
            {likes.length}
        </button>
    );
};

export default LikeButton;
