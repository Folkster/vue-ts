<template>
  <div class="home">
    <CardView :stockIds="stockList"></CardView>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LOAD_STATIC_DATA } from '@/store/action-types';
import CardView from '../components/CardView.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    CardView,
  },
  computed: {
    stockList(): string[] {
      return this.$store.getters.stockList;
    },
  },
  created() {
    if (this.stockList.length > 0) {
      return;
    }
    // const testStocks = ['AAPL', 'GME', 'fake', '', '000', 10, null, undefined];
    const testStocks = ['AAPL', 'GME'];
    testStocks.forEach((item) => {
      if (item != null && String(item).trim().length > 2) {
        this.$store.dispatch(LOAD_STATIC_DATA, item);
      }
    });
  },
});
</script>
