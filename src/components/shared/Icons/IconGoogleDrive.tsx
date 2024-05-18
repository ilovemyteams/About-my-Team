import { IconProps } from "../../../../types/iconProps.interface";

export const IconGoogleDrive = ({ className }: IconProps) => {
    return (
        <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 1024 1024"
            aria-label="Google Drive icon"
        >
            <path
                d="M438.016 640 253.408 960h580.608l184.608-320zm554.368-64L696.768 64h-369.6l295.616 512zM290.208 128 0 630.784l184.8 320 290.208-502.816z"
                fill="currentColor"
            />
        </svg>
    );
};
