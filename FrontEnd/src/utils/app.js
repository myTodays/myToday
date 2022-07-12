/**
 * @author: LK
 * @desc: 常用工具函数
 */

// 判断数据类型
const judgeType = (val) => {
    const toString = Object.prototype.toString;
    const map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",
    };
    return map[toString.call(val)];
};

// 拷贝数据
const deepClone = (data) => {
    const type = judgeType(data);
    let obj;
    if (type === "array") {
        obj = [];
    } else if (type === "object") {
        obj = {};
    } else {
        return data;
    }
    if (type === "array") {
        data.forEach(item=>{
            obj.push(deepClone(item));
        })
    } else if (type === "object") {
        for (const key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};
// 检查输入的是否为中文
const checkChinese = (s) => {
    let flag = true;
    for (let i = 0; i < s.length; i++) {
        flag = flag && s.charCodeAt(i) >= 10000;
    }
    return flag;
};

export default {
    judgeType,
    deepClone,
    checkChinese,
};
