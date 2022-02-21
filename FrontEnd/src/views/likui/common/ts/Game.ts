"use strict";

/**
 * @author: LK
 * @desc: 扫雷游戏
 */

export default class Mine {
    // 对应字段
    tr: number; // 行数
    td: number; // 列数
    mineNum: number; // 雷的数量
    squares: any; // 存储所有方块的信息，它是一个二维数组，按行与列的顺序排放。存取都使用行列的形式。
    tds: any; // 存储所有的单元格的DOM（二维数组）
    surplusMine: number; // 剩余雷的数量
    allRight: Boolean; // 右击标的小红旗是否全是雷，用来判断用户是否游戏成功。
    parent: any;
    mineNumDom:any;
    // 构造函数
    constructor(tr: number, td: number, mineNum: number) {
        this.tr = tr;
        this.td = td;
        this.mineNum = mineNum;
        this.squares = [];
        this.tds = [];
        this.surplusMine = mineNum;
        this.allRight = false;
        this.parent = document.querySelector(".gameBox");
        this.mineNumDom={};
    }
    // 初始化
    init() {
        let rn: any = this.randomNum(); //雷在格子里的位置
        let n: number = 0; //用来找到格子对应的索引
        for (let i = 0; i < this.tr; i++) {
            this.squares[i] = [];
            for (let j = 0; j < this.td; j++) {
                //this.squares[i][j] = ;
                //n++;
                //取一个方块在数组里的数据要使用行与列的形式去取。找方块周围的方块的时候要用坐标的形式去取。行与列的形式要跟坐标的形式x，y是刚好相反的。
                if (rn.indexOf(++n) != -1) {
                    //如果这个条件成立，说明现在循环到的这个索引在雷的数组里找到了，那就表示这个索引对应的是个雷
                    this.squares[i][j] = { type: "mine", x: j, y: i };
                } else {
                    this.squares[i][j] = {
                        type: "number",
                        x: j,
                        y: i,
                        value: 0,
                    };
                }
            }
        }
        this.updateNum();
        this.createDom();
        this.parent.oncontextmenu = function () {
            return false;
        };
        //剩余雷数
        this.mineNumDom = document.querySelector(".mineNum")!;
        this.mineNumDom.innerHTML = this.surplusMine;
    }
    //生成不重复的数字
    randomNum() {
        let square = new Array(this.tr * this.td); //生成一个空数组，但是有长度，长度为格子的总数。
        for (let i = 0; i < square.length; i++) {
            square[i] = i;
        }
        square.sort(function () {
            return 0.5 - Math.random();
        });
        return square.slice(0, this.mineNum);
    }
    // 创建表格
    createDom() {
        let This = this;
        let table = document.createElement("table");
        for (let i = 0; i < this.tr; i++) {
            //行
            let domTr = document.createElement("tr");
            this.tds[i] = [];
            for (let j = 0; j < this.td; j++) {
                //列
                let domTd:any = document.createElement("td");
                // domTd.innerHTML = 0;
                domTd.pos = [i, j]; //把格子对应的行与列存到格子身上，为了下面通过这个值去数组里取到对应的数据
                domTd.onmousedown = function () {
                    This.play(event, this); //This指的是实例对象，this指的是点击的那个td
                };
                this.tds[i][j] = domTd; //这里是把所有创建的td添加到数组中
                // if(this.squares[i][j].type == 'mine'){
                //     domTd.className = 'mine';
                // }
                // if(this.squares[i][j].type == 'number'){
                //     domTd.innerHTML = this.squares[i][j].value;
                // }
                domTr.appendChild(domTd);
            }
            table.appendChild(domTr);
        }
        this.parent.innerHTML = ""; //避免多出点击创建多个
        this.parent.appendChild(table);
    }
    //找某个方格子周围的8个方格
    getAround(square:any) {
        let x = square.x;
        let y = square.y;
        let result = []; //把找到的格子的坐标返回出去（二维数组）
        //通过坐标去循环九宫格
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if (
                    i < 0 || //格子超出了左边的范围
                    j < 0 || //格子超出了上边边的范围
                    i > this.td - 1 || //格子超出了右边的范围
                    j > this.tr - 1 || //格子超出了左边的范围
                    (i == x && j == y) || //当前循环到格子是自己
                    this.squares[j][i].type == "mine" //周围的格子是个雷
                ) {
                    continue;
                }
                result.push([j, i]); //要以行与列的形式返回出去。因为到时候需要用它去取数组里的数据
            }
        }
        return result;
    }
    //更新所有的数字
    updateNum() {
        for (let i = 0; i < this.tr; i++) {
            for (let j = 0; j < this.td; j++) {
                //只更新的是雷周围的数字
                if (this.squares[i][j].type == "number") {
                    continue;
                }
                let num = this.getAround(this.squares[i][j]); //获取到每一个雷周围的数字
                for (let k = 0; k < num.length; k++) {
                    // num[k] == [0,1]
                    // num[k][0] == 0
                    // num[k][1] == 1
                    this.squares[num[k][0]][num[k][1]].value += 1;
                }
            }
        }
    }
    // 开始游戏
    play(ev:any, obj:any) {
        let This = this;
        if (ev.which == 1 && obj.className != "flag") {
            //后面的条件是为了限制用户标完小红旗后左键就不能点击
            //点击的是左键
            let curSquare = this.squares[obj.pos[0]][obj.pos[1]];
            let cl = [
                "zero",
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
            ];
            if (curSquare.type == "number") {
                //用户点到的是数字
                obj.innerHTML = curSquare.value;
                obj.className = cl[curSquare.value];
                if (curSquare.value == 0) {
                    //点到了数字0
                    obj.innerHTML = ""; //如果数字为0的话，就不显示
                    function getAllZero(square:any) {
                        let around = This.getAround(square); //找到了周围的n个格子
                        for (let i = 0; i < around.length; i++) {
                            let x = around[i][0]; //行
                            let y = around[i][1]; //列
                            This.tds[x][y].className =
                                cl[This.squares[x][y].value];
                            if (This.squares[x][y].value == 0) {
                                //如果以某个格子为中心找到的格子值为0，那就需要接着调用函数（递归）
                                if (!This.tds[x][y].check) {
                                    //给对应的td添加一个属性，这个属性用于决定这个格子有没有被找过，如果找过的话，他的值就为true，下次就不会再找了
                                    This.tds[x][y].check = true;
                                    getAllZero(This.squares[x][y]);
                                }
                            } else {
                                //如果以某个格子为中心找到的格子值不为0，那就把人家的数字显示出来。
                                This.tds[x][y].innerHTML =
                                    This.squares[x][y].value;
                            }
                        }
                    }
                    getAllZero(curSquare);
                }
            } else {
                //用户点到的是雷
                this.gameOver(obj);
            }
        }
        //表示用户点击的是右键
        if (ev.which == 3) {
            //如果右击的是一个数字，那就不能点击
            if (obj.className && obj.className != "flag") {
                return;
            }
            obj.className = obj.className == "flag" ? "" : "flag"; //切换class
            if (this.squares[obj.pos[0]][obj.pos[1]].type == "mine") {
                this.allRight = true; //用户标记的小红旗背后都是雷
            } else {
                this.allRight = false;
            }
            if (obj.className == "flag") {
                this.mineNumDom.innerHTML = --this.surplusMine;
            } else {
                this.mineNumDom.innerHTML = ++this.surplusMine;
            }
            if (this.surplusMine == 0) {
                //剩余的雷的数量为0表示用户已经标记完小红旗了，这时候要判断游戏是成功还是结束
                if (this.allRight) {
                    //这个条件成立说明用户全部标对了
                    alert("恭喜你，游戏通过！");
                } else {
                    alert("很难过，游戏失败！");
                    this.gameOver('');
                }
            }
        }
    }
    //游戏失败函数
    gameOver(clickTd:any) {
        //1，显示所有的雷
        //2，取消所有的格子的点击事件
        //3，给点中的格子标上一个红
        for (let i = 0; i < this.tr; i++) {
            for (let j = 0; j < this.td; j++) {
                if (this.squares[i][j].type == "mine") {
                    this.tds[i][j].className = "mine";
                }
                this.tds[i][j].onmousedown = null;
            }
        }
        if (clickTd) {
            clickTd.style.backgroundColor = "#f00";
        }
    }
}
