import createMiddleware from "next-intl/middleware";

import { defaultLocale, localePrefix, locales } from "./config";

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    localeDetection: false,
});

export const config = {
    // Matcher entries are linked with a logical "or", therefore
    // if one of them matches, the middleware will be invoked.
    matcher: [
        // Match all pathnames except for
        // - … if they start with `/api`, `/_next` or `/_vercel`
        // - … the ones containing a dot (e.g. `favicon.ico`)
        "/((?!api|_next|_vercel|studio|.*\\..*|images|_next/static).*)",
    ],
};
