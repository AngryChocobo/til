import { Dirent } from "node:fs";
import * as fs from "node:fs/promises";

export async function readCategories() {
  const result = await fs.readdir("./", {
    encoding: "utf-8",
    withFileTypes: true,
  });

  const directories = result
    .filter((file) => file.isDirectory())
    .filter(filterUselessDirectories)
    .map((dir) => dir.name);
  console.log(directories);

  return directories;
}

export function filterUselessDirectories(dir: Dirent) {
  const target = ["node_modules"];
  const reg = /^\..+/; // 过滤掉以 "." 开头的文件夹
  return !target.includes(dir.name) && !reg.test(dir.name);
}
