"use client";

import { motion } from "framer-motion";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

interface TabletViewProps {
    screen: string;
}

export const TabletView = ({ screen }: TabletViewProps) => {
    const tabletFrameUrl =
        "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745399016/laptop_q3fwqs.png";
    return (
        <div className="w-full aspect-[16/9] mb-6 tab:mb-0 relative">
            <ImageFromCloud
                src={tabletFrameUrl}
                alt="Mobile mockup"
                width={1143}
                height={638}
                className="h-full w-full object-contain"
            />
            <div className="absolute left-[11%] right-[11%] top-[4%]  z-[-1] h-[91%] overflow-clip">
                <motion.div
                    className="absolute top-0 left-0 right-0 "
                    initial={{ y: 0 }}
                    whileInView={{ y: [0, "-80%", 0] }}
                    transition={{
                        duration: 120,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <ImageFromCloud
                        src={screen}
                        alt="Mobile view"
                        width={861}
                        height={3115}
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>
            </div>
        </div>
    );
};
