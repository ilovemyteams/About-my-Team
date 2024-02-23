import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    // A list of all locales that are supported
    locales: ["uk", "en", "pl"],

    // Used when no locale matches
    defaultLocale: "uk",
    localeDetection: false,
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(uk|en|pl)/:path*"],
};
