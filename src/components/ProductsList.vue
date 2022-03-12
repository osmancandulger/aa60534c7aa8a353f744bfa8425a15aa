<template>
  <div id="app">
    <div class="container">
      <p class="total-indicator">
        Shown:
        <span>{{
          this.activeIndex == 0
            ? 1 * this.perPage
            : (this.activeIndex + 1) * this.perPage
        }}</span
        >/{{ productsData.length }}
      </p>
      <Product
        class="product"
        v-for="item in productsForList"
        :key="item.id"
        :data="item"
      />
    </div>
    <Paginator
      :pagination-size="paginationSize"
      @paginationChange="updateValue"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getProducts } from "../repos/ProductsRepo";
import Product from "./Product.vue";
import Paginator from "./Paginator.vue";
@Component({
  components: {
    Product,
    Paginator,
  },
})
export default class ProductsList extends Vue {
  // @Prop() private msg!: string;

  isRed = false;
  productsData: any = [];
  activeIndex = 0;
  paginationSize = 0;
  perPage = 10;

  /**
   * @description Created lifecycle hook
   */
  created() {
    this.getData();
  }

  /**
   * @description Get product data from api
   */
  async getData() {
    try {
      const response = await getProducts();
      this.productsData = response.data.products;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @description Get emitted event from child component
   */
  updateValue(activeIndex: any) {
    this.activeIndex = activeIndex;
    this.scrollTop();
  }

  /**
   * @description Scroll top after user change the page
   */
  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
.total-indicator {
  position: absolute;
  right: 5%;
  top: 2%;
  span {
    font-weight: 800;
  }
}
</style>
