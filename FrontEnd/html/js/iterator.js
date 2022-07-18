/**
 * @author: LK
 * @desc: 迭代器
 */

let obj = {
    name: "words",
    list: ["a", "b", "c", "d"],
    [Symbol.iterator]() {
        let index = 0;
        let _this = this;
        return {
            next() {
                if (index < _this.list.length) {
                    const result = {
                        value: _this.list[index],
                        done: false,
                    };
                    index++;
                    return result;
                } else {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            },
        };
    },
};
for (let i of obj) {
    console.log(i);
}