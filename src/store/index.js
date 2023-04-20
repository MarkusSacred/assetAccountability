import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            user: ''
        }
    },
    mutations: {
        login(state) {
            state.user = 'admin'
        }
    }
});
export default store;