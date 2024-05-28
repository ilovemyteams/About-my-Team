import { IconProps } from "../../../../types/iconProps.interface";

export const IconLink = ({ className }: IconProps) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon link"
        >
            <path
                d="M16.3643 13.5353L14.9501 12.1211L16.3643 10.7069C18.3169 8.75432 18.3169 5.58848 16.3643 3.63586C14.4117 1.68323 11.2458 1.68323 9.29319 3.63586L7.87898 5.05007L6.46477 3.63586L7.87898 2.22164C10.6127 -0.512031 15.0448 -0.512031 17.7785 2.22164C20.5122 4.95531 20.5122 9.38742 17.7785 12.1211L16.3643 13.5353ZM13.5358 16.3638L12.1216 17.778C9.38799 20.5116 4.9558 20.5116 2.22213 17.778C-0.511543 15.0443 -0.511543 10.6121 2.22213 7.8785L3.63634 6.46428L5.05056 7.8785L3.63634 9.29272C1.68372 11.2453 1.68372 14.4111 3.63634 16.3638C5.58896 18.3164 8.75479 18.3164 10.7074 16.3638L12.1216 14.9495L13.5358 16.3638ZM12.8287 5.75718L14.243 7.17139L7.17188 14.2424L5.75766 12.8282L12.8287 5.75718Z"
                fill="currentColor"
            />
        </svg>
    );
};
