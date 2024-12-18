export const IconPresent = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 64 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[34px] tab:w-[40px] pc:w-[55px] animate-wave hover:animate-wobble ${className}`}
            aria-label="gift icon"
        >
            <rect
                x="5.83984"
                y="30.0527"
                width="51.8536"
                height="39.1259"
                fill="#DE007F"
            />
            <g filter="url(#filter0_d_13973_50943)">
                <rect
                    x="59.5771"
                    y="20.624"
                    width="9.42792"
                    height="55.1533"
                    transform="rotate(90 59.5771 20.624)"
                    fill="#DE007F"
                />
            </g>
            <rect
                x="28.625"
                y="20.626"
                width="7.07094"
                height="48.5538"
                fill="#FFFF40"
            />
            <path
                d="M51.1761 6.548C51.2464 6.6421 51.3716 6.88659 51.2967 7.46898C51.2201 8.0645 50.9454 8.86876 50.3935 9.8383C49.2932 11.7716 47.2845 14.0225 44.5843 16.041C41.8841 18.0594 39.1567 19.3488 36.991 19.8569C35.9049 20.1117 35.0558 20.1476 34.4629 20.0525C33.8832 19.9595 33.6841 19.7702 33.6138 19.6761C33.5434 19.582 33.4183 19.3375 33.4931 18.7551C33.5697 18.1596 33.8445 17.3554 34.3963 16.3858C35.4967 14.4525 37.5053 12.2016 40.2055 10.1832C42.9057 8.16474 45.6331 6.87534 47.7988 6.36721C48.8849 6.11239 49.7341 6.07653 50.3269 6.17164C50.9067 6.26466 51.1058 6.45391 51.1761 6.548Z"
                stroke="#FFFF40"
                stroke-width="4"
            />
            <path
                d="M32.0955 19.2152C32.0493 19.3232 31.9002 19.5539 31.3585 19.7805C30.8046 20.0122 29.9708 20.1768 28.8553 20.1843C26.6308 20.1991 23.6768 19.5865 20.578 18.2589C17.4793 16.9312 14.998 15.2152 13.4743 13.5944C12.7102 12.7816 12.2542 12.0644 12.0398 11.5036C11.8302 10.9551 11.8945 10.688 11.9407 10.58C11.987 10.472 12.136 10.2413 12.6777 10.0147C13.2316 9.78301 14.0654 9.61839 15.181 9.61095C17.4055 9.5961 20.3594 10.2087 23.4582 11.5364C26.557 12.864 29.0382 14.5801 30.562 16.2008C31.3261 17.0136 31.7821 17.7308 31.9964 18.2917C32.206 18.8402 32.1418 19.1072 32.0955 19.2152Z"
                stroke="#FFFF40"
                stroke-width="4"
            />
            <defs>
                <filter
                    id="filter0_d_13973_50943"
                    x="0.423828"
                    y="19.624"
                    width="63.1533"
                    height="17.4277"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.494401 0 0 0 0 0.0412001 0 0 0 0 0.300464 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_13973_50943"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_13973_50943"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};
