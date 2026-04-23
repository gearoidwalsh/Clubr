import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("home loads with main landmark", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("clubs directory loads", async ({ page }) => {
    await page.goto("/clubs");
    await expect(page.getByRole("heading", { name: /club/i })).toBeVisible();
  });

  test("saved page loads", async ({ page }) => {
    await page.goto("/saved");
    await expect(page.getByRole("heading", { name: /saved/i })).toBeVisible();
  });

  test("compare page shows hint without ids", async ({ page }) => {
    await page.goto("/compare");
    await expect(page.getByText(/two or more/i)).toBeVisible();
  });
});
