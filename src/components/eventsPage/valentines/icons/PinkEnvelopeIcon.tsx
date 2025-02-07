"use client";

import { sendGTMEvent } from "@next/third-parties/google";

import { IconProps } from "@/types/iconProps.interface";

export const PinkEnvelopeIcon = ({ className }: IconProps) => {
    const pathname =
        typeof window !== "undefined" ? window.location.pathname : "";
    const urlShare =
        typeof window !== "undefined" ? window.location.origin + pathname : "";
    return (
        <svg
            width="151"
            height="150"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
            aria-label="envelope icon"
            onClick={() =>
                sendGTMEvent({
                    event: "violet_envelope",
                    page_location: urlShare,
                })
            }
        >
            <defs>
                <linearGradient
                    y2="0.03545"
                    x2="0.48261"
                    y1="0.69734"
                    x1="0.48564"
                    id="paint0_linear_16502_31590"
                >
                    <stop stopColor="#A14CE4" />
                    <stop stopColor="#D9AAFE" offset="0.56" />
                    <stop stopColor="#E1A8FF" offset="1" />
                </linearGradient>
                <linearGradient
                    y2="0.43322"
                    x2="1.00064"
                    y1="0.48543"
                    x1="-0.00953"
                    id="paint1_linear_16502_31590"
                >
                    <stop stopColor="white" offset="0.47" />
                    <stop stopColor="#A14CE4" offset="1" />
                </linearGradient>
                <linearGradient
                    y2="0.01187"
                    x2="0.29436"
                    y1="0.95763"
                    x1="1.12185"
                    id="paint2_linear_16502_31590"
                >
                    <stop stopColor="#B8173C" />
                    <stop stopColor="#C02245" offset="0.32" />
                    <stop stopColor="#D63F60" offset="0.88" />
                    <stop stopColor="#DC4767" offset="1" />
                </linearGradient>
                <linearGradient
                    y2="0.48736"
                    x2="1.00157"
                    y1="0.50067"
                    x1="0.0067"
                    id="paint3_linear_16502_31590"
                >
                    <stop stopColor="#B00E34" />
                    <stop stopColor="#D43A59" offset="1" />
                </linearGradient>
                <linearGradient
                    y2="1.00437"
                    x2="0.48445"
                    y1="0.00472"
                    x1="0.49332"
                    id="paint4_linear_16502_31590"
                >
                    <stop stopColor="#AF68E7" />
                    <stop stopColor="#C891F2" offset="0.35" />
                    <stop stopColor="#EFDAFF" offset="1" />
                </linearGradient>
                <linearGradient
                    y2="0.99658"
                    x2="0.47365"
                    y1="-0.00308"
                    x1="0.48252"
                    id="paint5_linear_16502_31590"
                >
                    <stop stopColor="#E1C5F7" />
                    <stop stopColor="#C797EC" offset="0.65" />
                    <stop stopColor="#A14CE4" offset="1" />
                </linearGradient>
                <linearGradient
                    y2="0.41511"
                    x2="0.99624"
                    y1="0.48165"
                    x1="-0.00322"
                    id="paint6_linear_16502_31590"
                >
                    <stop stopColor="#A14CE4" />
                    <stop stopColor="#BF95E0" offset="0.35" />
                    <stop stopColor="#D2B2EB" offset="1" />
                </linearGradient>
            </defs>
            <g>
                <path
                    id="svg_1"
                    fill="#EBB3BD"
                    d="m75.675,113.453c12.83,-4.234 32.972,-19.182 32.584,-36.9792c-0.365,-16.9631 -21.801,-22.5223 -33.532,-7.1011c-12.3994,-15.6089 -33.5973,-10.4116 -33.2375,6.5661c0.3877,17.7972 21.1705,33.0592 34.1855,37.5142z"
                />
                <path
                    id="svg_2"
                    fill="black"
                    d="m73.294,2.5673c-20.8221,-0.1647 -73.2082,31.8378 -72.6326,59.0681l1.7805,83.4776c0.0382,1.781 1.5569,3.246 3.415,3.266l141.1351,1.129c1.843,0.014 3.315,-1.411 3.282,-3.207l-1.78,-83.4779c-0.586,-27.2505 -54.357,-60.1 -75.179,-60.2648l-0.021,0.009z"
                />
                <path
                    stroke="null"
                    id="svg_3"
                    fill="url(#paint0_linear_16502_31590)"
                    d="m73.29,2.5585c-20.822,-0.1647 -73.2081,31.8378 -72.6325,59.0681l1.8571,86.7094l147.8174,1.183l-1.857,-86.7103c-0.586,-27.2505 -54.357,-60.1 -75.18,-60.2647l-0.005,0.0145z"
                />
                <path
                    id="svg_4"
                    fill="url(#paint1_linear_16502_31590)"
                    d="m148.483,62.8238c-0.216,-4.1254 -1.567,-8.1217 -3.479,-11.8118c-1.907,-3.7046 -4.386,-7.123 -7.123,-10.3061c-5.464,-6.3952 -11.895,-11.9888 -18.77,-16.9359c-6.896,-4.9381 -14.152,-9.4134 -21.803,-13.0922c-3.815,-1.8439 -7.735,-3.4951 -11.747,-4.8495c-4.002,-1.3343 -8.152,-2.3594 -12.255,-2.4755c-4.0951,0.0518 -8.2098,1.0049 -12.1509,2.2858c-3.9564,1.2754 -7.8055,2.8708 -11.5503,4.6531c-7.505,3.5589 -14.5632,7.9256 -21.256,12.7565c-6.6624,4.8421 -12.8704,10.3297 -18.0499,16.64c-2.5871,3.1479 -4.9123,6.5238 -6.6756,10.2047c-1.7374,3.6574 -2.9237,7.6489 -2.9631,11.7634c-0.1288,-4.1266 0.9104,-8.1884 2.5778,-11.9375c1.6728,-3.7637 3.9127,-7.237 6.4405,-10.5057c5.1209,-6.4804 11.2802,-12.1179 17.9145,-17.1189c6.6243,-5.0212 13.7899,-9.3982 21.3375,-13.0736c3.7761,-1.8203 7.677,-3.4628 11.7057,-4.7942c4.0234,-1.3169 8.2211,-2.3552 12.6328,-2.4231c4.419,0.1493 8.665,1.2426 12.753,2.625c4.083,1.3969 8.053,3.0995 11.903,4.9893c7.716,3.7851 15.068,8.2793 21.91,13.4123c6.847,5.1184 13.261,10.8542 18.645,17.4185c2.659,3.303 5.064,6.8268 6.894,10.602c1.829,3.7752 3.046,7.8546 3.088,11.9823l0.021,-0.0089z"
                />
                <path
                    id="svg_5"
                    fill="url(#paint2_linear_16502_31590)"
                    d="m31.7532,64.4687c0.4966,22.7983 26.9624,42.3553 43.5298,48.0443l-1.214,-56.4667c-15.7919,-20.0037 -42.7767,-13.3261 -42.309,8.4037l-0.0068,0.0187z"
                />
                <path
                    id="svg_6"
                    fill="url(#paint3_linear_16502_31590)"
                    d="m116.769,65.151c0.497,22.798 -25.148,41.941 -41.48,47.382l-1.214,-56.4675c14.936,-19.7458 42.226,-12.6444 42.694,9.0855z"
                />
                <path
                    id="svg_7"
                    fill="url(#paint4_linear_16502_31590)"
                    d="m76.752,107.795c-0.258,-11.788 -32.2547,-42.0758 -75.9969,-42.4308l0.8914,41.8298l0.8913,41.83c43.7422,0.355 74.4722,-29.442 74.2092,-41.215l0.005,-0.014z"
                />
                <path
                    id="svg_8"
                    fill="url(#paint5_linear_16502_31590)"
                    d="m74.34,107.781c-0.258,-11.788 30.467,-41.5707 74.209,-41.2157l0.892,41.8297l0.891,41.83c-43.742,-0.354 -75.754,-30.648 -75.997,-42.43l0.005,-0.014z"
                />
                <path
                    id="svg_9"
                    fill="url(#paint6_linear_16502_31590)"
                    d="m75.428,102.168c-20.8222,-0.165 -73.4895,18.935 -72.904,46.185l73.901,0.589l73.901,0.588c-0.586,-27.25 -54.091,-47.203 -74.913,-47.368l0.015,0.006z"
                />
            </g>
        </svg>
    );
};
