"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";
import Image from "next/image";

interface FlyingEnvelopeProps {
    className?: string;
    envelope?: "white" | "pink";
}

export const FlyingEnvelope = ({
    className = "",
    envelope = "pink",
}: FlyingEnvelopeProps) => {
    const envelopeSrc =
        envelope === "pink"
            ? "/images/valen/pinkEnvelope.svg"
            : "/images/valen/whiteEnvelope.svg";

    const handleClick = () => {
        if (envelope !== "pink") {
            sendGTMEvent({
                event: "white_envelope",
            });
        }
    };
    return (
        <div
            onClick={handleClick}
            className={`grid grid-cols-[35%_35%_30%] max-h-[150px] aspect-[3] ${className}`}
        >
            <motion.div
                initial={{ rotate: "5deg", x: "30%" }}
                animate={{
                    rotate: ["-5deg", "5deg", "-5deg"],
                    x: ["30%", "30%", "30%"],
                    transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="flex items-center"
            >
                <Image
                    src="/images/valen/leftWing.svg"
                    alt="left wing"
                    width={150}
                    height={150}
                    className="w-full h-auto grow-0 shrink-1"
                />
            </motion.div>

            <Image
                src={envelopeSrc}
                alt="envelope"
                width={150}
                height={150}
                className="relative z-[10000] w-full h-auto grow-0 shrink-1"
            />
            <motion.div
                initial={{ rotate: "-5deg", x: "-18%" }}
                animate={{
                    rotate: ["5deg", "-5deg", "5deg"],
                    x: ["-18%", "-18%", "-18%"],
                    transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            >
                <Image
                    src="/images/valen/rightWing.svg"
                    alt="right wing"
                    width={150}
                    height={150}
                    className="w-full h-auto grow-0 shrink-1"
                />
            </motion.div>
        </div>
    );
};
