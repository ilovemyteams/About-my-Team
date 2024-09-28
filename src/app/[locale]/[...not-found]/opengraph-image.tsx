/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const alt = "404 Page Not Found";
export const contentType = "image/jpeg";

export default function Image() {
    return new ImageResponse(
        (
            <div>
                <img src="/images/404.jpeg" alt="404 Page Not Found" />
            </div>
        )
    );
}
