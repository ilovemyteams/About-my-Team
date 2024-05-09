export const MemberProjectExperience = ({
    projectsExperience,
}: {
    projectsExperience: string[];
}) => {
    const addProtocol = (url: string) => {
        if (!/^https?:\/\//i.test(url)) {
            return `https://${url}`;
        }
        return url;
    };
    return (
        <ul>
            {projectsExperience.slice(0, 3).map((project, index) => (
                <li
                    key={index}
                    className="px-0 truncate w-[230px] tab:w-[442px] dark:pc:hover:text-red pc:hover:text-redLight dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                >
                    <a
                        target="_blank"
                        href={addProtocol(project)}
                        className="text-sm ml-4 tab:text-base tab:ml-2"
                    >
                        {project}
                    </a>
                </li>
            ))}
        </ul>
    );
};
