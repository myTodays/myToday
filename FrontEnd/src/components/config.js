// 魔方
import vMofang from "@/components/Plugins/v-mofang.vue";
// 加载中
import vLoading from "@/components/Plugins/v-loading.vue";
// logo
import vLogo from "@/components/common/v-logo.vue";

// 导出组件
export function tplConfig(app) {
    app.component("v-mofang", vMofang);
    app.component("v-loading", vLoading);
    app.component("v-logo", vLogo);
}
