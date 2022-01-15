// 引入模块依赖
const jwt = require("jsonwebtoken");
// 创建 token 类
class Jwt {
    constructor(data) {
        this.data = data;
    }
    //生成token
    generateToken() {
        let content = this.data; // 要生成token的主题信息
        let secretKey = "me_likui"; // 这是加密的key（密钥）
        let token = jwt.sign(content, secretKey, {
            expiresIn: 60 * 60 * 1000, // 有效时间(s)
        });
        return token;
    }
    // 校验token
    verifyToken() {
        let token = this.data;
        let secretKey = "me_likui";
        let result;
        jwt.verify(token, secretKey, (err, decode) => {
            if (err) {
                result = "err";
            } else {
                result = decode;
            }
        });
        return result;
    }
}
module.exports = new Jwt();
