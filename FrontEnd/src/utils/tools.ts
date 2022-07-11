/**
 * @author: LK
 * @desc: 常用工具函数
 */

// 数字脱敏
export function handdleNum(num: any, start: number = 3, end: number = 7) {
    let str = num.substr(0, start) + "*".repeat(end - start) + num.substr(end);
    return str;
}

// 验证手机号
export function checkPhone(phone: any) {
    if (!/^1[23456789]\d{9}$/.test(phone)) {
        return false;
    }
}

// 验证码邮箱
export function checkEmail(email: any) {
    if (
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
            email
        )
    ) {
        return false;
    }
    return true;
}

// 格式化日期: 年-月-日
export function formatDate(times: number) {
    let date = new Date(times * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y: any = date.getFullYear() + "-";
    let M: any = date.getMonth() + 1;
    M = (M < 10 ? "0" + M : M) + "-";
    let D: any = date.getDate();
    D = D < 10 ? "0" + D : D;
    return Y + M + D;
}

// 格式化时间: 年-月-日 时:分:秒
export function formatTime(times: number) {
    let date = new Date(times * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y: any = date.getFullYear() + "-";
    let M: any = date.getMonth() + 1;
    M = (M < 10 ? "0" + M : M) + "-";
    let D: any = date.getDate();
    D = D < 10 ? "0" + D : D;
    let h: any = date.getHours();
    h = (h < 10 ? "0" + h : h) + ":";
    let m: any = date.getMinutes();
    m = (m < 10 ? "0" + m : m) + ":";
    let s: any = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return Y + M + D + " " + h + m + s;
}

// 处理详情页富文本图片问题
export function handleRichTxt(html: string) {
    let content = html.replace(/style/gi, "class");
    let newContent = content.replace(
        /\<img/gi,
        '< img style="width:100%;height:auto;display:block;"'
    );
    return newContent;
}

// 检查输入的是否为中文
export function checkChinese(str: string) {
    let flag = true;
    for (let i = 0; i < str.length; i++) {
        flag = flag && str.charCodeAt(i) >= 10000;
    }
    return flag;
}
