import { SocialLinks } from "../shared/mockedData/membersData";
import { SocialLinkSmallMemberCard } from "./SocialLinkSmallMemberCard";

interface MemberCardTextProp {
    position: string;
    socialLinks: SocialLinks;
}

export const MemberCardText = ({
    position,
    socialLinks,
}: MemberCardTextProp) => {
    return (
        <div className="flex pl-[6px] font-geist text-xs justify-between items-center">
            <p className="text-purple-50 w-min">{position.toUpperCase()}</p>
            <SocialLinkSmallMemberCard
                url={socialLinks.linkedin}
                image={"linkedin.svg"}
                alt={"Linkedin"}
            />
        </div>
    );
};
