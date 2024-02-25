import { test, expect } from "@playwright/test";

test("homePageNudeTest", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    await page.getByText("SMALL PAGE TITLE").click();
    await page.getByText("Назва сайту").click();
    await page.getByRole("heading", { name: "TEST JEST" }).click();
});
