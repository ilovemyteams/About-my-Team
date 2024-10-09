"use server";

import fs from "fs/promises";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "src", "mockedData", "likes.json");

export interface LikesTypes {
    questionSlug: string;
    userId: string;
}

export const getLikes = async () => {
    try {
        const file = await fs.readFile(FILE_PATH, "utf8");
        const allLikes = JSON.parse(file.toString());

        return allLikes as LikesTypes[];
    } catch (error) {
        return [] as LikesTypes[];
    }
};

export const saveLikes = async (data: LikesTypes) => {
    try {
        const allLikes = await getLikes();
        allLikes.push(data);

        fs.writeFile(FILE_PATH, JSON.stringify(allLikes, null, 2));
    } catch (error) {
        return error;
    }
};

export const removedLikes = async (questionSlug: string, userId: string) => {
    try {
        const allLikes = await getLikes();
        const newLikes = allLikes.filter(
            like =>
                !(like.questionSlug === questionSlug && like.userId === userId)
        );

        fs.writeFile(FILE_PATH, JSON.stringify(newLikes, null, 2));
    } catch (error) {
        return error;
    }
};
