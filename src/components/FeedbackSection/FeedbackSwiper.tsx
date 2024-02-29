import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import * as feedbacks from "./feedbackData.json";
import Image from "next/image";

interface FeedbackCard {
    name: string;
    image: string;
    video?: string;
    type: string;
    discription: string;
    id: string;
}
const FeedbackSwiper = () => {
    return (
        <div>
            <Swiper
                navigation
                pagination={{ type: "fraction" }}
                modules={[Navigation, Pagination]}
            >
                {feedbacks.map(
                    ({
                        image,
                        video,
                        name,
                        type,
                        id,
                        discription,
                    }: FeedbackCard) => (
                        <SwiperSlide key={id}>
                            <div>
                                <h4>{name}</h4>
                                {video ? (
                                    <iframe
                                        src={video}
                                        frameBorder="0"
                                        allowFullScreen
                                        width="100%"
                                        height="auto"
                                    />
                                ) : (
                                    <Image
                                        src={image}
                                        alt={name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                )}
                                <p>{type}</p>
                                <p>{discription}</p>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default FeedbackSwiper;
