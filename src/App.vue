<template>
  <div id="app">
    <ProductsList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductsList from "./components/ProductsList.vue";
@Component({
  components: {
    ProductsList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
