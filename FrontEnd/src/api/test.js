import request from "@/utils/request";
// 获取测试数据
export function getTestData(data = {}) {
    return request({
        url: "/api/test/test",
        method: "POST",
        data,
    });
}
