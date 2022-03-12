<template>
  <div id="app">
    <div class="pagination-container">
      <button
        class="pagination-prev"
        :class="activeIndex == 0 ? 'pagination-arrow-disabled' : ''"
        role="button"
        @click="activeIndex > 0 ? handlePagination('prev-first') : ''"
      >
        &#60;&#60;
      </button>
      <button
        class="pagination-prev"
        :class="activeIndex == 0 ? 'pagination-arrow-disabled' : ''"
        role="button"
        @click="activeIndex > 0 ? handlePagination('prev') : ''"
      >
        &#60;
      </button>
      <li
        v-for="(item, index) in paginationSize"
        :key="index"
        class="pagination-item"
        :class="index == activeIndex ? 'pagination-active' : ''"
        @click="
          activeIndex = index;
          emitter();
        "
      >
        {{ item }}
      </li>
      <button
        class="pagination-next"
        :class="
          activeIndex == paginationSize - 1 ? 'pagination-arrow-disabled' : ''
        "
        role="button"
        @click="
          activeIndex < paginationSize - 1 ? handlePagination('next') : ''
        "
      >
        &#62;
      </button>
      <button
        class="pagination-next"
        :class="
          activeIndex == paginationSize - 1 ? 'pagination-arrow-disabled' : ''
        "
        role="button"
        @click="
          activeIndex < paginationSize - 1 ? handlePagination('next-last') : ''
        "
      >
        &#62;&#62;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductsList extends Vue {
  @Prop() private paginationSize!: number;
  activeIndex = 0;

  /**
   * @descriptions Handle with pagination actions to set pagination's active index
   * @param {string}: action action's type
   */
  handlePagination(action: string) {
    action == "prev" ? (this.activeIndex -= 1) : (this.activeIndex += 1);
    action == "prev-first"
      ? (this.activeIndex = 0)
      : action == "next-last"
      ? (this.activeIndex = this.paginationSize - 1)
      : "";
    this.emitter();
  }
  emitter() {
    this.$emit("paginationChange", this.activeIndex);
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
