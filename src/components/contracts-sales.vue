<template>
  <div>
    <h1> There are currently {{ countList }} fruits in the list.</h1>
    <form @submit.prevent="addFruits">
      <input type="text" placeholder="Add a fruit" :value="newFruit" @input="updateFruit">
    </form>
    <ul class="fruit-list">
      <li v-for="(fruit, index) in fruitList" :key="index">
        {{ fruit }}
        <button v-on:click="removeFruits(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: "ContractSales",
  props: {
    countList: Number,
    newFruit: String,
    fruitList: Array,
    addFruits: Function,
    updateFruit: Function,
    removeFruits: Function
  }
}
</script>

<style>
  .fruit-list {
    list-style: none;
  }
</style>