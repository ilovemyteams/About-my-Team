import { PortableColorTitle, PortableTextSimple } from "@/types/sanity.types";

// Helper function to calculate the total character length of Portable Text content
export const calculateTotalLength = (
    blocks: PortableTextSimple | PortableColorTitle
): number => {
    return blocks
        .flatMap(block => block?.children?.map(child => child.text || "")) // Get the text from each child
        .join("").length; // Combine all text into a single string // Get the length of the combined string
};
