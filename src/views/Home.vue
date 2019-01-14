<template>
  <div class="home">
    <SalesByCountry :title="title"/>
    <!-- <ContractSales :countList="countList" :addFruit="addFruit" :fruitList="fruitList" :updateFruit="updateFruit"/> -->
    <ContractSales v-bind="{ countList, addFruits, fruitList, updateFruit, removeFruits }"/>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import SalesByCountry from '@/components/sales-by-country.vue'
import ContractSales from "@/components/contracts-sales.vue"

export default {
  name: 'home',
  data(){
    return {
      newFruit: ""
    }
  },
  computed: {
    ...mapState([
      "title",
      "fruitList"
    ]),
    ...mapGetters([
      "countList"
    ]),
  },
  methods: {
    ...mapMutations([
      "ADD_FRUIT",
      "REMOVE_FRUIT"
    ]),
    ...mapActions([
      "addFruit",
      "removeFruit"
    ]),
    addFruits(){
      // console.log("this is the new fruit:",this.newFruit)
      // console.log("this is the global store:", this.$store)
      // this.$store.commit("ADD_FRUIT", this.newFruit)
      this.addFruit(this.newFruit)
      this.newFruit = ""
    },
    updateFruit(e){
      // console.log("this is the event.target", e.target.value)
      this.newFruit = e.target.value
    },
    removeFruits(fruit){
      // console.log("Remove clicked")
      this.removeFruit(fruit)
    }
  },
  components: {
    SalesByCountry,
    ContractSales
  },
  created(){
    // console.log("this is the this in Home:", this)
  }
}
</script>
