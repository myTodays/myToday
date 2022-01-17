const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// 创建你的服务器应用程序，也就是原来的http.createServer
const app = express();

// 公开指定目录，直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use("/", express.static(path.join(__dirname, "./public/")));
// app.use("/admin", express.static(path.join(__dirname, "./public/admin")));
app.use(
    "/node_modules/",
    express.static(path.join(__dirname, "./node_modules/"))
);

app.all("*", (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || "*";
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("Access-Control-Allow-Origin", allowOrigin);
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "Express");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
});

// bodyParser 设置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router(app);
// 挂载路由----根据不同的功能划分模块
// app.use('./routers/router');
app.use("/api/user", require("./routers/user")); // 用户
app.use("/api/message", require("./routers/message")); // 留言

// 链接数据库
mongoose.connect(
    "mongodb://localhost:27017/myToday",
    {
        useNewUrlParser: true,
    },
    (err) => {
        if (err) {
            console.log("数据库连接失败！");
        } else {
            console.log("数据库连接成功！");
            // 监听 http 请求,相当于 server.listen
            app.listen(8080, () => {
                console.log("myToday---", "serve is running at port 8888...");
            });
        }
    }
);

// let options = {
//     db_user: "db_likui", //添加的普通账户名
//     db_pwd: "123456",
//     db_host: "127.0.0.1",
//     db_port: 27017,
//     db_name: "myCenter", //数据库名称
//     useNewUrlParser: true,
// };

// let dbUrl =
//     "mongodb://" +
//     options.db_user +
//     ":" +
//     options.db_pwd +
//     "@" +
//     options.db_host +
//     ":" +
//     options.db_port +
//     "/" +
//     options.db_name;
// mongoose.connect(dbUrl); // 连接数据库

// 监听 http 请求,相当于 server.listen
// app.listen(8080, () => {
//     console.log("---------", "serve is running at port 8080...");
// });
