// import path from "path";
// import glob from "glob";
// import * as fs from "node:fs/promises";

export async function pathBootstrap() {
  // const dirs = glob.sync("*/").filter(filterUselessDirectories);
  // // 生成文件夹目录
  // let str = dirs.reduce((pre, cur) => {
  //   const dirName = path.basename(cur);
  //   pre += `* [${dirName}](#${dirName}) \n`;
  //   return pre;
  // }, "## Categories\n");
  // str += "\n---\n";
  // dirs.forEach((dir) => {
  //   const files = glob.sync(dir + "*.md");
  //   files.forEach((file) => {
  //     var extension = path.extname(file); //  获取后缀名
  //     var fileName = path.basename(file, extension); // 获取没有后缀的文件名
  //     var dirName = path.dirname(file); // 获取文件夹名
  //     str += `* [${fileName}](#${file}) \n`;
  //   });
  // });
  // await writeREADME(str);
}

export function filterUselessDirectories(dirName: string) {
  const target = ["node_modules"];
  const reg = /^\..+/; // 过滤掉以 "." 开头的文件夹
  return !target.includes(dirName) && !reg.test(dirName);
}

export async function writeREADME(content: string) {
  await fs.writeFile("README.md", content, {
    encoding: "utf-8",
  });
}

// pathBootstrap();
