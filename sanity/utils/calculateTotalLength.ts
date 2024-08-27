// Helper function to calculate the total character length of Portable Text content
export const calculateTotalLength = (blocks: any[]): number => {
    return blocks
        .flatMap(block => block.children.map((child: any) => child.text || "")) // Get the text from each child
        .join("").length; // Combine all text into a single string // Get the length of the combined string
};
