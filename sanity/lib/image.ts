import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "./api";

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || "",
    dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
    return imageBuilder?.image(source).auto("format").fit("max").url();
};

export function urlForOpenGraphImage(image: Image | undefined) {
    return urlForImage(image)?.width(1200).height(627).fit("crop").url();
}
