import fs from "node:fs/promises";
import { writeREADME, pathBootstrap } from "../genREADMEcontent";

describe("use path api", () => {
  pathBootstrap();
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
