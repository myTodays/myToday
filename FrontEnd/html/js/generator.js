/**
 * @author: LK
 * @desc: Generator
 */

// function* foo() {
//     yield "a";
//     yield "b";
//     yield "c";
// }

// function* bar() {
//     yield "x";
//     // 手动遍历 foo()
//     // for (let i of foo()) {
//     //   console.log(i);
//     // }
//     yield "y";
// }

// function* bar() {
//     yield "x";
//     // 手动遍历 foo()
//     // for (let i of foo()) {
//     //   console.log(i);
//     // }
//     yield* foo();
//     yield "y";
//     yield "z";
// }

// for (let v of bar()) {
//     console.log(v);
// }
// x
// a
// b
// y

function one() {
    setTimeout(() => {
        console.log(111);
        run.next('a');
    }, 1000);
}
function two() {
    setTimeout(() => {
        console.log(222);
        run.next('b');
    }, 1000);
}
function three() {
    setTimeout(() => {
        console.log(333);
        run.next('c');
    }, 1000);
}

function* gen() {
    let res1 = yield one();
    console.log(res1);
    let res2 = yield two();
    console.log(res2);
    let res3 = yield three();
    console.log(res3);
}

const run = gen();
run.next();

// for(let i of genFun()){
//     console.log(i);
// }
