<template>
  <div id="app">
    <li class="item" v-if="data">
      <img class="product__img" :src="data.image.src" :alt="data.title" />
      <div class="desc-section">
        <div class="product-descriptions">
          <p class="product__title">{{ data.title }}</p>
          <p class="product__price">{{ data.variants[0].price }}</p>
        </div>
        <div class="action-section">
          <img
            class="detail-icon"
            src="../assets/icons/detail.png"
            alt="See Details!"
          />
          <!-- <span>See it!</span> -->
        </div>
      </div>
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductsList extends Vue {
  @Prop() private data!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  border: 2px solid blue;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  list-style: none;
  overflow: hidden;
  .product__img {
    width: 100%;
    height: 75%;
  }
  .product__title {
    font-size: 20px;
    font-weight: 400;
  }
  .product__price {
    font-weight: 800;
  }

  .desc-section {
    display: flex;
    .action-section {
      padding: 30px 33px;
    }
  }
  .product-descriptions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 15px;
    flex: 1;
  }
  .detail-icon {
    width: 35px;
    height: 35px;
    transition: transform 0.4s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
