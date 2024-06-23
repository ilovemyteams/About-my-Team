import { type SchemaTypeDefinition } from "sanity";
import settingsType from "./schemas/settings";
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [settingsType],
};
