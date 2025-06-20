export const PrivacyPolicy = ({
    selectedLink,
    policyTitle,
    targetBlank,
}: {
    selectedLink: string;
    policyTitle: string;
    targetBlank: boolean;
}) => {
    return (
        <a
            href={selectedLink}
            target={targetBlank ? "_blank" : ""}
            rel="noopener noreferrer"
            className="mb-[20px] tab:mb-0 text-sm outline-none dark:pc:hover:text-red pc:hover:text-redLight 
            dark:pc:focus:text-red pc:focus:text-redLight dark:active:text-red 
            active:text-redLight transition ease-out duration-300"
        >
            {policyTitle}
        </a>
    );
};
