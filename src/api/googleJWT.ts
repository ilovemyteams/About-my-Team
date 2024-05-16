import * as google from "google-auth-library";

const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
];

const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

console.log("GOOGLE_CLIENT_EMAIL", GOOGLE_CLIENT_EMAIL);
console.log("GOOGLE_SERVICE_PRIVATE_KEY", GOOGLE_SERVICE_PRIVATE_KEY);

export const jwt = new google.JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_SERVICE_PRIVATE_KEY,
    scopes: SCOPES,
});
