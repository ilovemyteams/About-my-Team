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
        case "astrojs":
            return "Astro.js";
        case "tailwind":
            return "Tailwind CSS";
        case "gsap":
            return "GSAP";
        case "nodemailer":
            return "Nodemailer";
        case "js":
            return "JavaScript";
        case "html":
            return "HTML5";
        case "scss":
            return "SCSS";
        case "vite":
            return "Vite";
        case "swiper":
            return "Swiper";
        case "emailjs":
            return "EmailJS";
        case "handlebars":
            return "Handlebars";
        default:
            return "";
    }
};
