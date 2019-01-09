<template>
  <div>
    <h1> There are currently {{ countList }} fruits in the list.</h1>
    <form @submit.prevent="addFruit">
      <input type="text" placeholder="Add a fruit" :value="newFruit" @input="updateFruit">
    </form>
    <ul>
      <li v-for="(fruit, index) in fruitList" :key="index">{{ fruit }}</li>
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
    addFruit: Function,
    fruitList: Array,
    updateFruit: Function
  }
}
</script>