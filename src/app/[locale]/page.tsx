import HomeTest from "@/src/components/Home";
import { useTranslations } from "next-intl";
import { SmallPageTitle } from "./components/shared/SmallPageTitle";

export default function Home() {
    const t = useTranslations("Home");
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className=" bg-purple-200 w-[100vw]">
                <SmallPageTitle>small page title</SmallPageTitle>
            </div>
            <h1 className="font-caviar text-5xl">Fonts (for QA)</h1>
            <div className="flex gap-[40px]">
                <div>
                    <p className="font-caviar text-5xl">Bold - 48/100%</p>
                    <p className="font-caviar text-4xl">Bold - 40/130%</p>
                    <p className="font-caviar text-2xl">Bold - 24/auto</p>
                    <p className="font-caviar text-xlb">Bold - 20/auto</p>
                    <p className="font-caviar text-lg">Bold - 18/auto</p>
                    <p className="font-caviar text-baseb">Bold - 16/auto</p>
                </div>

                <div>
                    <p className="font-geist text-xl">Regular - 20/auto</p>
                    <p className="font-geist text-base">Regular - 16/auto</p>
                    <p className="font-geist text-sm">Regular - 14/auto</p>
                    <p className="font-geist text-xs">Regular - 12/auto</p>
                </div>
            </div>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    {t("title")}
                </p>
                <HomeTest />
            </div>
        </main>
    );
}
