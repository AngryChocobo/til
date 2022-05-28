import fs from "node:fs/promises";
import { readCategories, readArticles, writeREADME } from "../genREADMEcontent";

test("categories", async () => {
  const result = await readCategories();
  expect(result.join(",")).toBe("copyTest,js");
});

test("articles", async () => {
  const result = await readArticles("js");
  expect(result.join(",")).toBe("Object.is copy.md,Object.is.md");
});

test.skip("write README.md", async () => {
  // const result = await writeREADME("awdawd");
  const result = await fs.appendFile("README.md", "aaa", {
    encoding: "utf-8",
  });
  const file = await fs.readFile("README.md", {
    encoding: "utf-8",
  });
  expect(file).toBe("awdawdaaa");
});
