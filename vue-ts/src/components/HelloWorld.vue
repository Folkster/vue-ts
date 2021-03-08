<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="_ in initCount" :key="_">
        <ListItem :num="_" />
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from './ListItem.vue';

export default Vue.extend({
  components: { ListItem },
  name: 'HelloWorld',
  data() {
    return {
      initCount: [0,1,2,3],
    };
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
