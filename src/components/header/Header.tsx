"use client";
import { useLocale } from "next-intl";
import { useEffect } from "react";

import { getClient } from "@/sanity/lib/client";
import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileTabletHeader } from "./MobileTabletHeader/MobileTabletHeader";

export const Header = () => {
    const { setData } = useSettingsContext();
    const locale = useLocale();

    useEffect(() => {
        async function fetchDataSettings() {
            const client = getClient();
            const settingsSanityData = await client.fetch(
                `
  *[_type == "settings"][0]{
  ...,
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
    buttonJoinUS {..., "buttonName":buttonName[_key == $language][0].value},
    buttonOrder {..., "buttonName":buttonName[_key == $language][0].value},
    buttonBuyMeCoffee {..., "buttonName":buttonName[_key == $language][0].value}
  }
`,
                { language: locale }
            );
            setData(settingsSanityData);
        }
        fetchDataSettings();
    }, [locale, setData]);

    return (
        <header className="fixed top-0 left-0 z-20">
            <DesktopHeader />
            <MobileTabletHeader />
        </header>
    );
};
