import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "This is my first Vuex app",
    fruitList: ["Banana", "Apple", "Peach"]
  },
  getters: {
    countList: state => {
      return state.fruitList.length
    }
  },
  mutations: {
    ADD_FRUIT: (state, fruit) => {
      state.fruitList.push(fruit)
    }
  },
  actions: {

  }
})
