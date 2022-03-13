<template>
  <div id="app">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Enter your search key here!"
      v-model="searchKey"
      @input="emitter"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductsList extends Vue {
  searchKey = "";

  /**
   * @description Fire emit event when input change
   */
  emitter() {
    this.$emit("searchKeyChange", this.searchKey);
  }
}
</script>

<style scoped lang="scss">
#search {
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  width: 45%;
  box-shadow: 0px 0px 20px 0px rgb(221 221 221);
}
</style>
