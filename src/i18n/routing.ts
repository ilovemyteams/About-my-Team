import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { defaultLocale, localePrefix, locales } from "@/src/config";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales,
    localePrefix,
    // Used when no locale matches
    defaultLocale,
    localeDetection: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
