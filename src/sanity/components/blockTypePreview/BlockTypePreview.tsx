import { Card, Grid, Radio } from "@sanity/ui";
import Image from "next/image";
import { FormEvent, useCallback } from "react";
import { set, StringInputProps, StringSchemaType } from "sanity";
import styled from "styled-components";

import { FAQ_PAGE_DESIGN_TYPES } from "../../constants";

const StyledLabel = styled("label")({
    "&:hover": {
        cursor: "pointer",
    },
});

export const BlockTypePreview = (props: StringInputProps<StringSchemaType>) => {
    const { value, onChange } = props;

    // const fieldValue = props?.value;
    const handleChange = useCallback(
        (event: FormEvent<HTMLInputElement>) => {
            onChange(set(event.currentTarget.value));
        },
        [onChange]
    );

    return (
        <Grid columns={2} gap={2} gapX={2}>
            {FAQ_PAGE_DESIGN_TYPES.map(item => (
                <StyledLabel htmlFor={item.value} key={item.value}>
                    <Card
                        border
                        shadow={item.value === value ? 2 : 0}
                        tone={item.value === value ? "caution" : "transparent"}
                        style={{
                            width: "100%",
                            aspectRatio: 2 / 1,
                            borderWidth: "4px",
                        }}
                        sizing={"border"}
                        overflow={"hidden"}
                    >
                        <Image
                            src={`/images/sanity/faqPreview/${item.value}.jpg`}
                            alt={item.title}
                            width={300}
                            height={150}
                            style={{
                                display: "block",
                                aspectRatio: "2/1",
                                objectFit: "cover",
                                objectPosition: "left top",
                            }}
                        />
                    </Card>
                    <Radio
                        checked={item.value === value}
                        value={item.value}
                        onChange={handleChange}
                        name="faq-blocks"
                        id={item.value}
                        style={{ display: "none" }}
                    />
                </StyledLabel>
            ))}
        </Grid>
    );
};
