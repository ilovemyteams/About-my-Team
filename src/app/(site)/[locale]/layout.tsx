import { NextIntlClientProvider } from "next-intl";
import React from "react";

import { BackgroundFigures } from "@/src/components/backgroundImages/BackgroundFigures";
import { CookiesComponent } from "@/src/components/cookies/Cookies";
import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/header/Header";
import { ScrollToTopButton } from "@/src/components/scrollToTopButton/ScrollToTopButton";
import { PreviousURLProvider } from "@/src/utils/PreviousURLContext";

export default async function Layout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <NextIntlClientProvider>
            <PreviousURLProvider>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-auto min-h-full">
                        <div className="pt-[80px] pc:pt-[0px] pc:ml-[80px] deskxl:ml-[120px] ">
                            <BackgroundFigures />
                            {modal}

                            {children}
                        </div>
                    </main>
                    <Footer />
                </div>
                <ScrollToTopButton />
                <CookiesComponent />
                {children}
            </PreviousURLProvider>
        </NextIntlClientProvider>
    );
}
