import { test } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("/");
    // await expect(page.getByText("Дизайн")).toBeVisible();
});
