export const addProtocol = (url: string) => {
    if (!/^https?:\/\//i.test(url)) {
        return `https://${url}`;
    }
    return url;
};

export const removeProtocol = (url: string) => {
    return url.replace(/^https?:\/\//i, "");
};
