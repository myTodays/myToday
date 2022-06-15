// 魔方
import vMofang from "@/components/Plugins/v-mofang.vue";
// 加载中
import vLoading from "@/components/Plugins/v-loading.vue";
// logo
import vLogo from "@/components/Base/v-logo.vue";

// 导出组件
export function tplConfig(app:any) {
    app.component("v-mofang", vMofang);
    app.component("v-loading", vLoading);
    app.component("v-logo", vLogo);
}
