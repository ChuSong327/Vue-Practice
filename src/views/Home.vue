<template>
  <div class="home">
    <SalesByCountry :title="title"/>
    <ContractSales :countList="countList" :addFruit="addFruit" :fruitList="fruitList" :updateFruit="updateFruit"/>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */ 
import { mapState, mapGetters, mapMutations } from "vuex"
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
      "ADD_FRUIT"
    ]),
    addFruit(){
      console.log("this is the new fruit:",this.newFruit)
      console.log("this is the global store:", this.$store)
      this.$store.commit("ADD_FRUIT", this.newFruit)
      this.newFruit = ""
    },
    updateFruit(e){
       console.log("this is the event.target", e.target)
      this.newFruit = e.target.value
    }
  },
  components: {
    SalesByCountry,
    ContractSales
  },
  created(){
    console.log("this is the this in Home:", this)
  }
}
</script>
