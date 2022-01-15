const { verifyToken } = require("../utils/jwt");
//验证token的方法
let tokenMiddlWare = (req, res, next) => {
    let { token } = req.body;
    //验证用户有没有传token
    if (!token) {
        return res.send({ err: -997, msg: "token丢失" });
    }
    //获取验证token的状态
    let tokenState = verifyToken(token);
    console.log(tokenState);
    if (tokenState) {
        //判断一下数据库token 和用户传递的token 是否一致
        tokenCheck(tokenState._id, token)
            .then(() => {
                next();
            })
            .catch((err) => {
                console.log(err);
                res.send({ err: -999, msg: err });
            });
    } else {
        res.send({ err: -998, msg: "token失效" });
    }
};
module.exports = tokenMiddlWare;

app.use(function (req, res, next) {
    if (req.url != "/user_login" && req.url != "/user_register") {
        let token = req.headers.token;
        let jwt = new Jwt(token);
        let result = jwt.verifyToken();
        if (result == "err") {
            return res.status(200).json({
                code: 0,
                msg: "登录失效，请重新登录～",
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
