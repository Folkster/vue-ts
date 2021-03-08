<template>
  <div class="hello">
    <h1 v-if="isModulusTwo">{{joke}}</h1>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'ListItem',
  props: {
    num: Number,
  },
  computed: {
    isModulusTwo(): boolean {
      return this.num % 2 === 0;
    },
    ...mapGetters({ joke: 'getCurrentJoke' }),
  },
  methods: {
    ...mapActions(['setCurrentJoke']),
  },
  mounted() {
    this.setCurrentJoke();
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
