<template>
  <div class="main">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="nbr in stockList" :key="nbr">
        <StockCard :code="nbr" />
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StockCard from './StockCard.vue';

export default Vue.extend({
  components: { StockCard },
  name: 'CardView',
  computed: {
    stockList(): string[] {
      return this.$store.getters.stockList;
    },
    // stockData(): Map<String,Stock> {
    //   return this.$store.getters.stockData;
    // },
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
