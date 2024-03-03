import Image from "next/image";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TopBox } from "./TopBox";

export const PortfolioCard = () => {
    return (
        <div className="relative -mx-4">
            <Image
                src="https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg"
                alt="Picture"
                width={320}
                height={384}
            />
            <div className="flex">
                <div>
                    <TopBox>Design</TopBox>
                    <TopBox>Logo Design</TopBox>
                    <TopBox>Web Development</TopBox>
                </div>
                <TopBox>01</TopBox>
            </div>
            <div>
                <h4>I love my team</h4>
            </div>
            <div>
                <SmallPageTitle className="ml-1 mr-3 flex items-center">
                    лендінг
                </SmallPageTitle>
            </div>
            <div>
                <p>
                    На нашому сайті ви знайдете інформацію про вже реалізовані
                    проекти та команди, які стояли за їхнім створенням,{" "}
                </p>
            </div>
        </div>
    );
};
