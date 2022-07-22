/**
 * @author: LK
 * @desc: Function
 */

// 手写call
Function.prototype.myCall = function (content) {
    if (typeof this != "function") {
        throw new Error("error");
    }
    content = content || window;
    let args = [...arguments].slice(1);
    content.fn = this;
    let result = content.fn(...args);
    delete content.fn;
    return result;
};

// 手写apply
Function.prototype.myApply = function (content) {
    if (typeof this != "function") {
        throw new Error("error");
    }
    content = content || window;
    content.fn = this;
    let result;
    if (arguments[1]) {
        result = content.fn(...arguments[1]);
    } else {
        result = content.fn();
    }
    delete content.fn;
    return result;
};

window.name = "LIKUI";
let obj = {
    name: "likui",
    age: 25,
    sex: "男",
    say() {
        console.log(666, this.name);
    },
};
let obj2 = {
    name: "aaa",
    age: 25,
    sex: "男",
};

// obj.say.call(obj2);
// obj.say.call(window);

// delete obj.age;
// console.log(obj);