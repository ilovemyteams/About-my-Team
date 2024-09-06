export const readingTimeEstimation = (text: string): number => {
    return Math.ceil(text.split(" ").length / 180);
};
