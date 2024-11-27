import { DescriptionType, TextType } from "@/src/mockedData/servicesData";
import { RedSquareBullet } from "./RedSquareBullet";

export const ListWithRedSquareBullets = ({
    description,
}: {
    description: DescriptionType[];
}) => {
    return (
        <ul className="tab:w-[75%] pc:w-[57.7%] mb-8 tab:mb-0">
            {description.map((item, index) => (
                <li
                    key={index}
                    className="flex gap-2 tab:gap-5 text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 mb-4 last:mb-0 tab:mb-[26px]"
                >
                    <div className="w-3 tab:w-[18px] mt-[2px] tab:mt-0">
                        <RedSquareBullet differentSizes differentBorder />
                    </div>
                    {typeof item.text === "string"
                        ? item.text
                        : (item.text as TextType[]).map((subItem, subIndex) => (
                              <p key={subIndex}>{subItem.text}</p>
                          ))}
                </li>
            ))}
        </ul>
    );
};
