/**
 * @author: LK
 * @desc: ElementUI 封装
 */

import { ElMessage } from "element-plus";

// 提示
export const tipMsg = (type: string) => {
    
    console.log(666, type);
    ElMessage({
        showClose: true,
        message: "Congrats, this is a success message.",
        type: "success",
    });
    ElMessage({
        showClose: true,
        message: "Warning, this is a warning message.",
        type: "warning",
    });
    ElMessage({
        showClose: true,
        message: "Oops, this is a error message.",
        type: "error",
    });
};
