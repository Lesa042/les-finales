import axios from "axios"
;

export default {
    namespaced: true,
    state() {
        return {
            clothes: []
        }
    },
    getters: {},
    mutations: {
        setClothesData(state,payload) {
            state.clothes = payload
        }
    },
    actions: {
        async setClothesData({commit}) {
        try {
            const {data} = await axios.get (
                "https://les-finales-default-rtdb.firebaseio.com/datas.json"
            )
            const arr = []
            for (let key in data) {
                arr.push({id: key, ...data[key]})
            }
            commit("setClothesData", arr)
        } catch (err) {
            console.log(err)
        }
        }
    }
}