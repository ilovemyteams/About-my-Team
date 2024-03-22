import { useTranslations } from "next-intl";
import { IconUp } from "../shared/IconUp";
import { useState } from "react";

export const MenuMobileTeamSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeStateMenu = () => {
        setIsOpen(isOpen => !isOpen);
    };
    const getTranslation = useTranslations("OurTeam");
    return (
        <div className="tab:hidden pc:hidden">
            <button onClick={changeStateMenu}>
                <p></p>
                <IconUp
                    className={`w-[40px] h-[40px] duration-300 ease-out transition-transform  ${isOpen ? "rotate-0" : "rotate-180 "}`}
                />
            </button>
            <ul>
                <li>
                    {getTranslation("teamsList")}
                    <ul>
                        <li>I love my team</li>
                        <li>Selo</li>
                    </ul>
                </li>
                <li>{getTranslation("listTitle")}</li>
            </ul>
        </div>
    );
};
