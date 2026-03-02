export type RouteSearchParams = Promise<{
    [key: string]: string | undefined;
}>;

export type RouteSlugParams = Promise<{ slug: string }>;
