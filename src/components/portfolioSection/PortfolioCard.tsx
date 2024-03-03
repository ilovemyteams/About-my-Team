import Image from "next/image";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const PortfolioCard = () => {
    return (
        <div>
            <Image
                src="https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg"
                alt="Picture"
                width={320}
                height={384}
            />
            <div>Design</div>
            <div>Logo Design</div>
            <div>Web Development</div>
            <div>
                <p>01</p>
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
