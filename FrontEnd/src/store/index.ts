import { createStore } from "vuex";
const store = createStore({
    state: {
        hasLogin: false,
        token: "",
        userInfo: "",
        bgType: "lucky",
    },
    mutations: {
        toggleBgType(state, data) {
            state.bgType = data;
        },
    },
    actions: {},
    modules: {},
});

export default store;
