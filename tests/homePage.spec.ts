import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("/");
    await expect(
        page.getByRole("heading", { name: "Бізнес-аналіз" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Дизайн" })).toBeVisible();
});
