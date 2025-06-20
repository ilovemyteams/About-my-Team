import { defineField } from "sanity";

import { DurationInput } from "../../../components/duration/DurationInput";

export const durationType = defineField({
    type: "object",
    name: "duration",
    title: "Duration",
    components: {
        input: DurationInput,
    },
    fields: [
        defineField({
            type: "datetime",
            name: "start",
            title: "Start",
        }),
        defineField({
            type: "datetime",
            name: "end",
            title: "End",
        }),
    ],
});
