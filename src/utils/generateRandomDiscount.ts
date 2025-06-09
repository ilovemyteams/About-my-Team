const MIN_DISCOUNT = 5;
const MAX_DISCOUNT = 15;

export const generateRandomDiscount = () => {
    return Math.floor(
        Math.random() * (MAX_DISCOUNT - MIN_DISCOUNT + 1) + MIN_DISCOUNT
    );
};
