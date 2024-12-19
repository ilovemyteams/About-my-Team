import { WishProp } from "../mockedData/wishesData";

export const wishRandomizer = (wishes: WishProp[]): string => {
    if (!wishes.length) return "";
    const randomIndex = Math.floor(Math.random() * wishes.length);
    return wishes[randomIndex].id;
};
