"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { addFAQLike, removeFAQLike } from "@/sanity/lib/mutationQuery";
import { generateUserId } from "@/src/utils/generateUserId";

import { IconLike } from "./Icons/IconLike";

type LikeButtonProps = {
    likes: string[] | null;
    docId: string;
};

const LikeButton = ({ likes: serverSavedLikes, docId }: LikeButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const [likes, setLikes] = useState(serverSavedLikes || []);
    const [userId, setUserId] = useState<null | string>(null);
    const isUserVoted = useMemo(() => {
        return !!likes.find(item => item === userId);
    }, [likes, userId]);
    const router = useRouter();

    useEffect(() => {
        if (serverSavedLikes) {
            setLikes(serverSavedLikes);
        } else {
            setLikes([] as string[]);
        }
    }, [serverSavedLikes]);

    useEffect(() => {
        const persistedUserId = localStorage.getItem("userId");
        setUserId(persistedUserId);
    }, []);

    const changeLikes = useCallback(
        async (docId: string, userId: string, action: "remove" | "add") => {
            setStartAnimation(true);

            try {
                if (action === "add") {
                    const newLikes = [...likes, userId];
                    setLikes(newLikes);
                    await addFAQLike(docId, userId);
                } else {
                    const newLikes = likes.filter(item => !(item === userId));
                    setLikes(newLikes);
                    await removeFAQLike(docId, userId);
                }
            } catch (error) {
                return error;
            } finally {
                setIsLoading(false);
                router.refresh();
            }
        },

        [likes, router]
    );

    const onClickBtn = useCallback(async () => {
        const userIdForSaving = userId || generateUserId();
        setIsLoading(true);
        if (!userId) {
            localStorage.setItem("userId", userIdForSaving);
            setUserId(userIdForSaving);
        }

        if (isUserVoted) {
            await changeLikes(docId, userIdForSaving, "remove");
        } else {
            await changeLikes(docId, userIdForSaving, "add");
        }
    }, [userId, isUserVoted, changeLikes, docId]);

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
                    className={twMerge(
                        isUserVoted || startAnimation
                            ? "text-redLight dark:text-red"
                            : "text-inherit",
                        startAnimation
                            ? "animate-pulsationBrokenHeart"
                            : "animate-none",
                        "w-[24px] h-[24px]"
                    )}
                />
                <span className="leading-[20px]"> {likes.length}</span>
            </span>
        </button>
    );
};

export default LikeButton;
