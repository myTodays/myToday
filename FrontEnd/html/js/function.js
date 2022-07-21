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
    return result;

}