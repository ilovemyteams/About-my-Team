export const escapeSpecSymbolsInSearch = (word: string) => {
    return word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // екранує всі спецсимволи перед пошуком
};
