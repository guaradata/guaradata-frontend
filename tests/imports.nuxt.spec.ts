/* eslint-disable quotes */
import { test } from "vitest";

describe("import vue components", () => {
  test("normal import as expected", async () => {
    const cmp = await import("../components/UserCard.vue");
    expect(cmp).toBeDefined();
  });
});
