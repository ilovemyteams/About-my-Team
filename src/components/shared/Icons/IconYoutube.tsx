import { IconProps } from "@/types/iconProps.interface";

export const IconYoutube = ({ className }: IconProps) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon youtube"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3912 2.66666C17.2457 2.67146 19.3834 2.69226 21.6555 2.78346L22.4619 2.81866C24.7484 2.92587 27.0334 3.11148 28.1678 3.42669C29.6799 3.85232 30.8671 5.09078 31.2688 6.66206C31.9088 9.15818 31.9888 14.0256 31.9984 15.2049L32 15.4481V15.7265C31.9888 16.9058 31.9088 21.7748 31.2688 24.2693C30.8623 25.8454 29.6735 27.0855 28.1678 27.5047C27.0334 27.8199 24.7484 28.0055 22.4619 28.1127L21.6555 28.1495C19.3834 28.2391 17.2457 28.2615 16.3912 28.2647L16.0152 28.2663H15.6072C13.7991 28.2551 6.23711 28.1735 3.83059 27.5047C2.32012 27.0791 1.13126 25.8406 0.729637 24.2693C0.0896047 21.7732 0.00960048 16.9058 0 15.7265V15.2049C0.00960048 14.0256 0.0896047 9.15658 0.729637 6.66206C1.13606 5.08598 2.32492 3.84592 3.83219 3.42829C6.23711 2.75786 13.8007 2.67626 15.6088 2.66666H16.3912ZM11 22.8389L24 15.3333L11 7.82777L11 22.8389Z"
                fill="currentColor"
            />
        </svg>
    );
};
