import { createStore } from "vuex";
import clothes from "./clothes";

export const store = createStore({
    modules: {
        clothes,
    },
})