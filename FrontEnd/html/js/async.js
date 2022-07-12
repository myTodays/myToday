const fs = require("fs");

// 读取文件
// const readFile = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (error, data) => {
//             if (error) return reject(error);
//             resolve(data);
//         });
//     });
// };

// const asyncReadFile = async () => {
//     const fs1 = await readFile("./file/a.txt");
//     const fs2 = await readFile("./file/b.txt");
//     console.log(fs1.toString());
//     console.log(fs2.toString());
// };

// asyncReadFile();
async function timeout(ms) {
    await new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 50);
