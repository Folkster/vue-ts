<template>
  <div class="stock-main">
      <h3 class=stock-header>{{currentStock ? currentStock.name : ''}}</h3>
      <!-- <p class="stock-code">{{'CODE: ' + currentStock ? currentStock?.code : ''}}</p>
      <p class="stock-price">{{'PRICE: ' + currentStock ? currentStock?.price : ''}}</p>
      <p class="stock-update">{{'PRICE: ' + currentStock ? currentStock?.lastUpdate : ''}}</p> -->
      <button @click="getNewPrice">Refresh Price</button>
      <ul class=stock-price-history>
        <li class="stock-price-history-item"></li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// type import????????
import { Stock } from '../types/index';

export default Vue.extend({
  name: 'StockCard',
  props: {
    code: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      test: 0,
    };
  },
  computed: {
    currentStock(): Stock | undefined {
      return this.$store.getters.getStock(this.code);
    },
    // priceHistory(): Map<Number,String> {
    //   return this.$store.state.bookingDialogModule.bookingDialog;
    // },
  },
  methods: {
    getNewPrice() {
      const newVal = this.test + 1;
      this.test = newVal;
      console.log('BUTTONCLICK');
    },
  },
  mounted() {
    this.test = 1;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
