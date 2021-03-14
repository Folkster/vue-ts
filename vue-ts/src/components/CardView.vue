<template>
  <div class="cardview-main">
    <div class="cardview-header"></div>
    <h1>My Stocks</h1>
    <p>
      Enter a stock ticker code in the Ticker Box if you want more stocks
    </p>
    <div class="cardview-body">
      <div class="cardview-box cardview-box-ticker">
        <h3>Ticker List</h3>
        <ul></ul>
      </div>
      <div class="cardview-box cardview-box-stocks">
        <ul>
          <li v-for="stockData in allStocks" :key="stockData.id">
            <StockCard :code="stockData.code" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LOAD_STATIC_DATA } from '@/store/action-types';
import { Stock } from '../types/index';
import StockCard from './StockCard.vue';
// type import????????

export default Vue.extend({
  components: { StockCard },
  name: 'CardView',
  props: {
    stockIds: {
      type: [],
      required: true,
      default: [],
    },
  },
  computed: {
    allStocks(): Array<Stock> {
      const stocks: Map<string, Stock> = this.$store.getters.stockMap;
      return stocks.values.length >= 0 ? Array.from(stocks.values()) : [];
    },
  },
  mounted() {
    this.stockIds.forEach((item) => {
      if (item != null && String(item).trim().length > 2) {
        this.$store.dispatch(LOAD_STATIC_DATA, item);
      }
    });
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
