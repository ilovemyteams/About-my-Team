import { addProtocol } from "@/src/utils/addProtocol";

export const MemberProjectExperience = ({
    projectsExperience,
}: {
    projectsExperience: string[];
}) => {
    return (
        <ul>
            {projectsExperience.slice(0, 3).map((project, index) => (
                <li
                    key={index}
                    className="px-0 truncate w-[230px] tab:w-[442px]"
                >
                    <a
                        target="_blank"
                        href={addProtocol(project)}
                        className="text-sm ml-4 tab:text-base tab:ml-2 border-b dark:border-grey border-greyLight dark:pc:hover:text-red dark:pc:hover:border-red pc:hover:border-redLight
                        pc:hover:text-redLight dark:active:text-red active:text-redLight dark:active:border-red active:border-redLight 
                        dark:pc:focus:text-red pc:focus:text-redLight dark:pc:focus:border-red pc:focus:border-redLight font-caviar text-lg outline-none
                        transition-color ease-out duration-300"
                    >
                        {project}
                    </a>
                </li>
            ))}
        </ul>
    );
};
