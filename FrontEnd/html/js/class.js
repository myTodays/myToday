/**
 * @author: LK
 * @desc: Class
 */

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("吃饭～");
    }
    run() {
        console.log(this.name + "可以行走");
    }
}
const pig = new Animal("猪", "10");
console.log(pig.run());

// let age = 30;
// if(true){
//     console.log(age);
//     let age = 20;
//     console.log(age);
// }