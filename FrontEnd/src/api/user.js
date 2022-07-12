import request from "@/utils/request";
// 用户登录
export function loginBtn(data = {}) {
    return request({
        url: "/api/user/admin/user_login",
        method: "POST",
        data,
    });
}
// 获取用户列表
export function getUsers(data = {}) {
    return request({
        url: "/api/user/user_lists",
        method: "POST",
        data,
    });
}
// 删除用户
export function deleteUser(data = {}) {
    return request({
        url: "/api/user/delete_user",
        method: "POST",
        data,
    });
}
// 获取用户列表
export function message_lists(data = {}) {
    return request({
        url: "/api/test/test",
        method: "POST",
        data,
    });
}
