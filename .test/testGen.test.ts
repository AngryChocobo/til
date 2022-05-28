import { readCategories } from "../genREADMEcontent";

test("ok", async () => {
  const result = await readCategories();
  expect(result.join(",")).toBe("js");
});
