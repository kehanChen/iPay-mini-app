import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ad: [],
        broadcast: [],
        brandsPhone: [],
        pricePhone: [],
        brandsElse: [],
        priceElse: [],
    
    },
    mutations: {
        updateAd(state, arr) {
            state.ad = arr;
        },
        updateBroadcast(state, arr) {
            state.broadcast = arr;
        },
        updateBrandsPhone(state, arr) {
            state.brandsPhone = arr;
        },
        updatePricePhone(state, arr) {
            state.pricePhone = arr;
        },
        updateBrandsElset(state, arr) {
            state.brandsElse = arr;
        },
        updatePriceElse(state, arr) {
            state.priceElse = arr;
        }
    }
})
