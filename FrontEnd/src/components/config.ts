// 魔方
import vMofang from "@/components/plugins/v-mofang.vue";
// 加载中
import vLoading from "@/components/plugins/v-loading.vue";
// logo
import vLogo from "@/components/base/v-logo.vue";

// 导出组件
export function tplConfig(app:any) {
    app.component("v-mofang", vMofang);
    app.component("v-loading", vLoading);
    app.component("v-logo", vLogo);
}
