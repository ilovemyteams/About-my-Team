import Image from "next/image";
import { TopBox } from "./TopBox";
import { BottomBox } from "./BottomBox";

export const PortfolioCard = () => {
    return (
        <>
            <div className="relative -mx-4 w-80 h-96">
                <Image
                    src="https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg"
                    alt="Picture"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />

                <div className="flex absolute mt-6 mx-4">
                    <div>
                        <TopBox className="mr-2 mb-2">Design</TopBox>
                        <TopBox className="mr-2">Logo Design</TopBox>
                        <TopBox>Web Development</TopBox>
                    </div>
                    <TopBox className="h-8">01</TopBox>
                </div>

                <div className="absolute bottom-6 mx-4">
                    <BottomBox className="font-caviar font-bold text-xl mb-1">
                        I love my team
                    </BottomBox>

                    <BottomBox className="text-sm font-normal text-purple-50 mb-3">
                        ЛЕНДІНГ
                    </BottomBox>
                    <BottomBox>
                        На нашому сайті ви знайдете інформацію про вже
                        реалізовані проекти та команди, які стояли за їхнім
                        створенням,
                    </BottomBox>
                </div>
            </div>
        </>
    );
};
