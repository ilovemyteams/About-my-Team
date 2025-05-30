import { IconProps } from "../../../../types/iconProps.interface";

export const IconDesign = ({ className }: IconProps) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className={className}
            aria-label="design icon"
        >
            <path
                d="M4.625 9.91935V4.375H35.371V9.91935M4.625 9.91935V35.625H35.371V9.91935M4.625 9.91935H35.371M9.66532 15.1277H16.0497M13.8656 22.0161H22.4341M9.66532 28.7366H22.4341M24.2823 15.1277H28.9866V26.5524M24.1983 15.3377C24.1983 16.7064 23.0887 17.8159 21.7201 17.8159C20.3514 17.8159 19.2419 16.7064 19.2419 15.3377C19.2419 13.9691 20.3514 12.8595 21.7201 12.8595C23.0887 12.8595 24.1983 13.9691 24.1983 15.3377ZM31.4227 28.6106C31.4227 29.9792 30.3132 31.0887 28.9446 31.0887C27.5759 31.0887 26.4664 29.9792 26.4664 28.6106C26.4664 27.2419 27.5759 26.1324 28.9446 26.1324C30.3132 26.1324 31.4227 27.2419 31.4227 28.6106Z"
                stroke="currentColor"
            />
        </svg>
    );
};
