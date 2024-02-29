import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("/");
    await expect(
        page.getByText(
            "Розкажи про свої унікальні можливості та приєднуйся до нашої команди"
        )
    ).toBeVisible();
    await expect(page.getByText("ПОСЛУГИ")).toBeVisible();
});
