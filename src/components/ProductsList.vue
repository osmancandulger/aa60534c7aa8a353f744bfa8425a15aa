<template>
  <div id="app">
    <SearchBar @searchKeyChange="searchIt" />
    <div class="container">
      <p class="total-indicator">
        Shown:
        <span>{{ listSize }}</span
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
      v-if="productsData.length > 10"
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
import SearchBar from "./SearchBar.vue";
@Component({
  components: {
    Product,
    Paginator,
    SearchBar,
  },
})
export default class ProductsList extends Vue {
  // @Prop() private msg!: string;

  isRed = false;
  productsData: any = [];
  productsDataCopy: any = [];
  activeIndex = 0;
  paginationSize = 0;
  perPage = 10;
  listSize = 0;
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
      this.productsDataCopy = this.productsData;
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

  searchIt(key: string) {
    let array: any = Object.assign([], this.productsDataCopy);
    if (key.length > 1) {
      this.productsData = array.filter((item: any) =>
        item.title.toLowerCase().includes(key.toLowerCase())
      );
    } else {
      this.productsData = Object.assign([], this.productsDataCopy);
    }
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

    this.paginationSize =
      this.productsData.length > 10
        ? Math.round(this.productsData.length / this.perPage)
        : this.productsData.length;
    this.listSize = products.length;
    return products;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  position: relative;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(301px, 1fr));
  place-items: center;
  display: grid;
  grid-gap: 5px;
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
  top: 1.5%;
  @media screen and (max-width: 767px) {
    display: none;
  }

  span {
    font-weight: 800;
  }
}
</style>
