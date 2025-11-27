import { getTranslations } from "next-intl/server";

interface AboutProps {
    text: string[];
    services?: string[];
}

export const About = async ({ text, services }: AboutProps) => {
    const t = await getTranslations("MemberPage");
    console.log(services);

    return (
        <section className="grid grid-cols-1 gap-4 tab:gap-5 pc:gap-8 desk:gap-10">
            <div className="text-greyLight dark:text-grey text-sm tab:text-base23 desk:text-lg25 leading-[23px] font-normal">
                <h2 className="flex items-center font-caviar text-baseb tab:text-2xlb pc:text-3xl desk:text-4xl mb-4 text-purple-200 dark:text-white-200 before:mr-3 before:content-[''] before:border-[2px] before:border-redLight dark:before:border-red before:w-2 before:h-2">
                    {t("about")}
                </h2>
                {text.map((paragraph, index) => (
                    <p key={index} className="mb-3 leading-[23px]">
                        {paragraph}
                    </p>
                ))}
            </div>
            {services && (
                <div className="p-4 border border-purple-strokeLight dark:border-purple-stroke text-greyLight dark:text-grey">
                    <h3 className="font-caviar text-baseb tab:text-lg pc:text-xlb text-purple-200 dark:text-white-200 mb-2">
                        {t("services")}
                    </h3>
                    <p className="text-sm tab:text-base23 desk:text-lg25 text-greyLight dark:text-grey font-normal [&>span:not(:last-child)]:after:content-['\2022'] [&>span:not(:last-child)]:after:px-2">
                        {services.map((service, index) => (
                            <span key={index}>{service}</span>
                        ))}
                    </p>
                </div>
            )}
        </section>
    );
};
