import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Портфоліо")).toBeVisible();

    await expect(page.getByText("КОНСУЛЬТАЦІЇ", { exact: true })).toBeVisible();
});
