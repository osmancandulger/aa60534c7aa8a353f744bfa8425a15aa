<template>
  <div id="app">
    <div class="container">
      <Product
        class="product"
        v-for="item in productsForList"
        :key="item.id"
        :data="item"
      />
    </div>
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
        @click="activeIndex = index"
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
import { getProducts } from "../repos/ProductsRepo";
import Product from "./Product.vue";
@Component({
  components: {
    Product,
  },
})
export default class ProductsList extends Vue {
  // @Prop() private msg!: string;

  isRed = false;
  number = 2;
  productsData: any = [];
  activeIndex = 0;
  paginationSize = 0;
  perPage = 10;
  created() {
    this.getData();
  }

  async getData() {
    try {
      const response = await getProducts();
      this.productsData = response.data.products;
    } catch (error) {
      console.error(error);
    }
  }

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
  }

  /**
   * @description Computed getter for filtered products' list
   * @return {any[]}: products
   */
  get productsForList(): any {
    const products = this.productsData.slice(
      this.activeIndex * this.perPage,
      (this.activeIndex + 1) * this.perPage
    );

    this.paginationSize = this.productsData.length / this.perPage;
    return products;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  .product + .product {
    margin-left: 20px;
  }
}
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

  .pagination-arrow-disabled {
    color: rgba(0, 0, 0, 0.159);
    cursor: not-allowed;
  }
}
</style>
