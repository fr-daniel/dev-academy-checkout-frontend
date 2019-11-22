import Vue from "vue";
import Vuex from "vuex";

import products from "./modules/products";
import checkout from "./modules/checkout";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    checkout
  }
});
