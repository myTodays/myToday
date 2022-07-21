/**
 * @author: LK
 * @desc: Function
 */

// 手写call
Function.prototype.myCall() = function (content) {
    if (typeof this != 'function') {
        throw new Error('error');
    }
    content = content || window;
    let args = [...arguments].slice(1);
    content.fn = this;
    let result = content.fn(...args);
    delete content.fn;
    return result;
}

// 手写apply
Function.prototype.myApply() = function (content) {
    if (typeof this != 'function') {
        throw new Error('error');
    }
    content = content || window;
    content.fn = this;
    let result;
    if(arguments[1]){
        result = content.fn(...arguments[1]);
    }else{
        result = content.fn()
    }
    delete content.fn;
    return result;
}