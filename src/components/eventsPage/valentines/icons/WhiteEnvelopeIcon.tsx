import { sendGTMEvent } from "@next/third-parties/google";

import { IconProps } from "@/types/iconProps.interface";

export const WhiteEnvelopeIcon = ({ className }: IconProps) => {
    const pathname =
        typeof window !== "undefined" ? window.location.pathname : "";
    const urlShare =
        typeof window !== "undefined" ? window.location.origin + pathname : "";
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="white envelope with heart icon"
            onClick={() =>
                sendGTMEvent({
                    event: "white_envelope",
                    page_location: urlShare,
                })
            }
        >
            <mask
                id="mask0_16589_31502"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="46"
                height="46"
            >
                <path
                    d="M22.8157 0.749548C16.5386 0.67148 0.702662 10.2469 0.839809 18.4561L1.26498 43.6223C1.27412 44.1593 1.73001 44.603 2.29014 44.6116L44.8374 45.1443C45.3929 45.1512 45.8387 44.7234 45.8312 44.1821L45.406 19.0158C45.2659 10.8006 29.0991 0.824934 22.8219 0.746867L22.8157 0.749548Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_16589_31502)">
                <path
                    d="M22.8196 0.744665C16.5425 0.666598 0.706567 10.2421 0.843713 18.4513L1.28765 44.5919L45.8493 45.1499L45.4054 19.0093C45.2653 10.794 29.0984 0.81835 22.8212 0.740282L22.8196 0.744665Z"
                    fill="url(#paint0_linear_16589_31502)"
                />
                <path
                    d="M23.7183 32.4741C23.6563 28.9205 14.0506 19.7468 0.863842 19.5801L1.07664 32.1907L1.28944 44.8013C14.4762 44.968 23.7804 36.0277 23.7167 32.4785L23.7183 32.4741Z"
                    fill="url(#paint1_linear_16589_31502)"
                />
                <path
                    d="M22.9945 32.4663C22.9325 28.9126 32.2351 19.9768 45.4218 20.1434L45.6346 32.7541L45.8474 45.3647C32.6607 45.198 23.0503 36.0226 22.9929 32.4706L22.9945 32.4663Z"
                    fill="url(#paint2_linear_16589_31502)"
                />
                <path
                    d="M23.3246 30.7747C17.0475 30.6967 1.14404 36.3824 1.28414 44.5976L23.5627 44.8758L45.8412 45.1539C45.7011 36.9387 29.5972 30.8511 23.32 30.773L23.3246 30.7747Z"
                    fill="url(#paint3_linear_16589_31502)"
                />
                <path
                    d="M45.4024 19.0153C45.3429 17.7715 44.9409 16.565 44.3693 15.45C43.7993 14.3307 43.0568 13.2968 42.2358 12.3336C40.5971 10.3984 38.6658 8.70344 36.5996 7.20279C34.5273 5.70483 32.3459 4.34588 30.0443 3.22648C28.8965 2.66544 27.7168 2.16234 26.5092 1.74859C25.3045 1.34091 24.0548 1.02624 22.818 0.985647C21.5833 0.995685 20.3416 1.27737 19.1517 1.65812C17.9573 2.03717 16.7947 2.51285 15.6633 3.04499C13.396 4.10756 11.2623 5.41426 9.23814 6.86137C7.22312 8.31189 5.34423 9.9576 3.7743 11.8527C2.99015 12.7981 2.28465 13.8126 1.74813 14.9198C1.21944 16.0199 0.85649 17.2215 0.839094 18.4617C0.805772 17.2176 1.12452 15.9946 1.63221 14.8668C2.14153 13.7345 2.82147 12.6906 3.58788 11.7087C5.14038 9.76219 7.0048 8.07121 9.01155 6.57274C11.0153 5.06818 13.1814 3.75856 15.4618 2.66093C16.6026 2.11734 17.7808 1.62755 18.9972 1.2317C20.2119 0.840232 21.4788 0.532976 22.809 0.518534C24.141 0.56957 25.4195 0.904928 26.6501 1.3272C27.879 1.75385 29.0738 2.27252 30.232 2.84744C32.553 3.99896 34.7635 5.36374 36.8193 6.92037C38.8767 8.47263 40.8026 10.2104 42.4171 12.1965C43.2143 13.1958 43.9347 14.2613 44.4811 15.4018C45.0276 16.5423 45.389 17.7737 45.3962 19.018L45.4024 19.0153Z"
                    fill="url(#paint4_linear_16589_31502)"
                />
            </g>
            <path
                d="M23.3792 34.1772C27.2529 32.9186 33.3451 28.4399 33.252 23.0746C33.1646 17.9606 26.7095 16.2556 23.1524 20.8882C19.4352 16.1661 13.0376 17.7039 13.1234 22.8222C13.2164 28.1875 19.4615 32.8165 23.3792 34.1772Z"
                fill="#EBB3BD"
            />
            <mask
                id="mask1_16589_31502"
                maskUnits="userSpaceOnUse"
                x="13"
                y="18"
                width="21"
                height="17"
            >
                <path
                    d="M23.3242 34.2549C27.1734 32.9921 33.2287 28.5146 33.1339 23.1537C33.0465 18.0398 26.633 16.3352 23.0958 20.9702C19.4002 16.2462 13.0425 17.7888 13.1299 22.9027C13.223 28.2681 19.4311 32.8983 23.3242 34.2549Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask1_16589_31502)">
                <path
                    d="M13.1298 22.902C13.2229 28.2674 19.4311 32.8976 23.3242 34.2542L23.0974 20.9651C19.4017 16.2411 13.0441 17.7837 13.1315 22.8976L13.1298 22.902Z"
                    fill="url(#paint5_linear_16589_31502)"
                />
                <path
                    d="M33.1371 23.1549C33.2302 28.5203 27.1749 32.9977 23.3258 34.2605L23.099 20.9715C26.6345 16.3408 33.0497 18.041 33.1371 23.1549Z"
                    fill="url(#paint6_linear_16589_31502)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_16589_31502"
                    x1="0.918709"
                    y1="22.5348"
                    x2="45.4586"
                    y2="21.782"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F3D4D4" />
                    <stop offset="0.56" stopColor="#F7E5E5" />
                    <stop offset="1" stopColor="#FAEFEF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_16589_31502"
                    x1="12.1658"
                    y1="19.7503"
                    x2="11.8485"
                    y2="44.9603"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F3D4D4" />
                    <stop offset="0.35" stopColor="#F4DBDB" />
                    <stop offset="1" stopColor="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_16589_31502"
                    x1="34.1035"
                    y1="20.0136"
                    x2="33.7862"
                    y2="45.2236"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F7E4E4" />
                    <stop offset="0.65" stopColor="#F4DBDB" />
                    <stop offset="1" stopColor="#F3D4D4" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_16589_31502"
                    x1="1.17057"
                    y1="37.5503"
                    x2="45.7104"
                    y2="36.7975"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F3D4D5" />
                    <stop offset="0.35" stopColor="#F4DBDB" />
                    <stop offset="1" stopColor="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_16589_31502"
                    x1="0.451341"
                    y1="9.3479"
                    x2="45.4773"
                    y2="8.58693"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.47" stopColor="white" />
                    <stop offset="1" stopColor="#DAB9B9" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_16589_31502"
                    x1="24.5754"
                    y1="33.5774"
                    x2="16.1679"
                    y2="18.3113"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B8173C" />
                    <stop offset="0.32" stopColor="#C02245" />
                    <stop offset="0.88" stopColor="#D63F60" />
                    <stop offset="1" stopColor="#DC4767" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_16589_31502"
                    x1="23.1428"
                    y1="26.2625"
                    x2="33.1415"
                    y2="26.0936"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B00E34" />
                    <stop offset="1" stopColor="#D43A59" />
                </linearGradient>
            </defs>
        </svg>
    );
};
