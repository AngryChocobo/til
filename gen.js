const path = require("path");
const glob = require("glob");
const fs = require("node:fs/promises");

async function pathBootstrap() {
  const dirs = glob.sync("*/").filter(filterUselessDirectories);
  // 生成文件夹目录
  let str = dirs.reduce((pre, cur) => {
    const dirName = path.basename(cur);
    pre += `* [${dirName}](#${dirName}) \n`;
    return pre;
  }, "## Categories\n\n");
  str += "\n---\n\n";
  dirs.forEach((dir) => {
    const dirName = path.basename(dir);
    str += `### ${dirName}\n\n`;

    const files = glob.sync(dir + "*.md");
    files.forEach((file) => {
      const extension = path.extname(file); //  获取后缀名
      const fileName = path.basename(file, extension); // 获取没有后缀的文件名
      str += `* [${fileName}](#${file}) \n`;
    });
  });
  await writeREADME(str);
}

function filterUselessDirectories(dirName) {
  const target = ["node_modules/"];
  const reg = /^\..+/; // 过滤掉以 "." 开头的文件夹
  return !target.includes(dirName) && !reg.test(dirName);
}

async function writeREADME(content) {
  await fs.writeFile("README.md", content, {
    encoding: "utf-8",
  });
}

pathBootstrap();
