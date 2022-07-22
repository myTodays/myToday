/**
 * @author: LK
 * @desc: Storage 存储web实现
 */

const $App = {
    // 存储数据
    setStorage(key, value, duration) {
        let data = {
            value: value,
            expiryTime:
                !duration || isNaN(duration)
                    ? 0
                    : this.getCurrentTimeStamp() + parseInt(duration),
        };
        localStorage[key] = JSON.stringify(data);
    },
    // 获取数据
    getStorage(key) {
        let data = localStorage[key];
        if (!data || data === "null") {
            return null;
        }
        let now = this.getCurrentTimeStamp();
        let obj;
        try {
            obj = JSON.parse(data);
        } catch (e) {
            return null;
        }
        if (obj.expiryTime === 0 || obj.expiryTime > now) {
            return obj.value;
        }
        return null;
    },
    // 删除数据
    removeStorage(key) {
        localStorage.removeItem(key);
    },
    // 清理数据
    clearStorage(cfg) {
        localStorage.clear();
    },
    // 获取当前时间戳
    getCurrentTimeStamp: function () {
        return Date.parse(new Date());
    },
};
