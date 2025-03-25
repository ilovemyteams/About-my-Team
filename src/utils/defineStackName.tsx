export const defineStackName = (technology: string | undefined) => {
    switch (technology) {
        case "typescript":
            return "Typescript";
        case "figma":
            return "Figma";
        case "photoshop":
            return "Adobe Photoshop";
        case "illustrator":
            return "Adobe Illustrator";
        case "typeorm":
            return "TypeORM";
        case "react-toastify":
            return "React-Toastify";
        case "nextjs":
            return "Next.js";
        case "postgresql":
            return "PostgreSQL";
        case "nestjs":
            return "NestJS";
        case "rtk-rtkq":
            return "RTK+RTKQ";
        default:
            return "";
    }
};
