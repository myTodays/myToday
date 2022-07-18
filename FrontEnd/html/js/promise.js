/**
 * @author: LK
 * @desc: Promise
 */

// 导入 fs 模块
const fs = require("fs");

let promise = new Promise((resolve, reject) => {
    fs.readFile("../common/article.txt", (err, data) => {
        err ? reject(err) : resolve(data);
    });
});
promise
    .then(
        (res) => {
            return new Promise((resolve, reject) => {
                fs.readFile("../common/info.txt", (err, data) => {
                    err ? reject(err) : resolve(res + data);
                });
            });
        },
        (err) => {
            console.log(err);
        }
    ).then(
        (res) => {
            return new Promise((resolve, reject) => {
                fs.readFile("../common/about.txt", (err, data) => {
                    err ? reject(err) : resolve(res + data);
                });
            });
        },
        (err) => {
            console.log(err);
        }
    )
    .then(
        (res) => {
            console.log(888, res);
        },
        (err) => {
            console.log(err);
        }
    );
// console.log();
