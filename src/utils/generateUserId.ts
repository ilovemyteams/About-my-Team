export const generateUserId = () => {
    return Math.floor(Math.random() * Date.now()).toString(16);
};
