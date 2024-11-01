import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "./config";

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
    {
        locales,
    }
);
