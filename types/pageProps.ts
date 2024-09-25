import { Home } from "./sanity.types";

export interface HomePageProps {
    data: Home | null;
}
export type HomePageParamsProps = { params: { locale: string } };
