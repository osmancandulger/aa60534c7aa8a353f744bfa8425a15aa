<template>
  <div id="app">
    <SearchBar @searchKeyChange="searchIt" />
    <div class="container">
      <select
        id="types"
        v-model="selectedType"
        @change="filterByType(selectedType)"
      >
        <option value="All" selected>All</option>
        <option v-for="(type, index) in typesList" :key="index" :value="type">
          {{ type }}
        </option>
      </select>

      <p class="total-indicator">
        Shown:
        <span>{{ listSize }}</span
        >/{{ productsData.length }}
      </p>
      <template v-if="isLoading">
        <h4 class="no-content">Loading..</h4></template
      >
      <template v-else>
        <template v-if="productsForList.length > 0">
          <Product
            v-for="item in productsForList"
            :key="item.id"
            :data="item"
          />
        </template>
        <template v-if="productsForList.length == 0">
          <h4 class="no-content">No Product Found!</h4></template
        >
      </template>
    </div>
    <Paginator
      :pagination-size="paginationSize"
      :isFlush="isFlush"
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
  /* eslint-disable @typescript-eslint/no-inferrable-types */

  productsData: any = [];
  productsDataCopy: any = [];
  typesList: any[] = [];
  activeIndex = 0;
  paginationSize = 0;
  perPage: number = 10;
  listSize: number = 0;
  isLoading: boolean = true;
  noContent: boolean = false;
  isFlush: boolean = false;
  selectedType: string = "All";
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
      this.typesList = [
        ...new Set(this.productsDataCopy.map((item: any) => item.product_type)),
      ];
      this.isLoading = false;
    } catch (error) {
      this.noContent = true;
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
   * @description Filter data by search key
   * @param {string}:key
   */
  searchIt(key: string) {
    let array: any = Object.assign([], this.productsDataCopy);
    if (key.length > 1) {
      this.productsData = array.filter((item: any) =>
        item.title.toLowerCase().includes(key.toLowerCase())
      );
    } else {
      this.isFlush = !this.isFlush;
      this.productsData = Object.assign([], this.productsDataCopy);
    }
  }

  /**
   * @description Filter data by product type
   * @param {type}:string
   */
  filterByType(type: string) {
    setTimeout(() => {
      this.isFlush ? (this.isFlush = false) : (this.isFlush = true);
    }, 50);
    let array: any = Object.assign([], this.productsDataCopy);

    if (type != "All") {
      this.productsData = array.filter(
        (item: any) => item.product_type == type
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
    return 0;
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
    if (this.productsData.length > 10) {
      this.paginationSize =
        this.productsData.length > 10
          ? Math.round(this.productsData.length / this.perPage)
          : this.productsData.length;
    } else {
      this.paginationSize = 1;
    }
    this.listSize = products.length;
    return products;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
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
#types {
  position: absolute;
  width: 8%;
  right: 15%;
  top: 1.5%;
  border-radius: 10px;
  outline: none;
  @media screen and (max-width: 767px) {
    right: 5%;
    top: -27px;
    width: 15%;
  }
  @media screen and (min-width: 767px) and (max-width: 1200px) {
    right: 2%;
    top: -27px;
    width: 15%;
  }
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    right: 20%;
  }
}
.no-content {
  margin-top: 20%;
  font-weight: 800;
}
</style>
