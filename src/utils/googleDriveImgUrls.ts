export const googleDriveImgUrls = (url: string): string => {
    const RAW_URL1 = url.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    return `https://drive.google.com/thumbnail?id=${IMAGE_ID}`;
};
