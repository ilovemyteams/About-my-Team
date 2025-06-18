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
        case "next-auth":
            return "Next-auth";
        case "formik":
            return "Formik";
        case "momentjs":
            return "Moment.js";
        case "react":
            return "React.js";
        case "redux":
            return "Redux";
        case "editorjs":
            return "Editor.js";
        case "material-ui":
            return "Material UI";
        case "axios":
            return "Axios";
        case "react-easy-crop":
            return "React-easy-crop";
        case "java":
            return "Java";
        case "spring-boot":
            return "Spring Boot";
        case "spring-data":
            return "Spring Data";
        case "spring-security":
            return "Spring Security";
        case "hibernate":
            return "Hibernate";
        case "redis":
            return "Redis";
        case "flyway":
            return "Flyway";
        case "junit":
            return "JUnit";
        case "mockito":
            return "Mockito";
        case "testcontainers":
            return "Testcontainers";
        case "lombok":
            return "Lombok";
        case "maven":
            return "Maven";
        case "docker":
            return "Docker";
        case "dayjs":
            return null;
        case "react-datapicker":
            return "React Datapicker";
        case "yup":
            return "Yup";
        case "html-react-parser":
            return "html-react-parser";
        case "yet-another-react-lightbox":
            return "Yet Another React Lightbox";
        case "sharp":
            return "Sharp";
        default:
            return "";
    }
};
