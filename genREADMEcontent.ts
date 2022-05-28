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

export async function readArticles(dirName: string) {
  const files = await fs.readdir(dirName, {
    encoding: "utf-8",
    withFileTypes: true,
  });
  return files.filter((f) => !f.isDirectory()).map((f) => f.name);
}

async function genContent(directories: string[]) {
  let content = "## Categories\n";
  for (const dir of directories) {
    content += `* [${dir}](#${dir}) \n`;
  }

  for (const dir of directories) {
    content += "\n  ----- \n";
    content += `\n  ### ${dir} \n`;
    const articleNames = await readArticles(dir);
    articleNames.forEach((article) => {
      content += `* [${article}](http://github.com/AngryChocobo/til/blob/main/${dir}/${article}) \n`;
    });
  }
  return content;
}
async function bootstrap() {
  //
  const directories = await readCategories();
  const content = await genContent(directories);
  console.log(content);
  await writeREADME(content);
}

export async function writeREADME(content: string) {
  await fs.writeFile("README.md", content, {
    encoding: "utf-8",
  });
}

bootstrap();
