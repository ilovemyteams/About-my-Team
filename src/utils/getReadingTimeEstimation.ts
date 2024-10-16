export const getReadingTimeEstimation = (text: string): number => {
    return Math.ceil(text.split(" ").length / 180);
};
