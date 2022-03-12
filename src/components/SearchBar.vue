<template>
  <div id="app">
    <input type="text" name="" id="" v-model="searchKey" @input="emitter" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductsList extends Vue {
  @Prop() private isSearchAllowed!: boolean;
  searchKey = "";

  emitter() {
    this.$emit("searchKeyChange", this.searchKey);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pagination-container {
  margin-top: 10px;
  li:hover {
    color: rgba(0, 0, 0, 0.349);
  }
  button {
    border: none;
    border-radius: 15px;
  }
  .pagination-prev {
  }
  cursor: pointer;
  .pagination-active {
    font-weight: 800;
    transition: transform 0.3s ease;
    transform: scale(1.2);
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }

  .pagination-arrow-disabled {
    color: rgba(0, 0, 0, 0.159);
    cursor: not-allowed;
  }
}
</style>
