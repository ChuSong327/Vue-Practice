/* eslint-disable */ 
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
    },
    REMOVE_FRUIT: (state, fruit) => {
      state.fruitList.splice(fruit, 1)
    }
  },
  actions: {
    addFruit: (context, fruit) => {
      context.commit("ADD_FRUIT", fruit)
    },
    removeFruit: (context, fruit) => {
      context.commit("REMOVE_FRUIT", fruit)
    }
  }
})
