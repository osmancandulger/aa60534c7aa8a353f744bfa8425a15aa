<template>
  <div id="app">
    <li class="item" v-if="data">
      <div class="img-wrapper">
        <button
          v-if="data.images.length > 1"
          class="carousel-handler carousel-prev"
          :class="activeIndex == 0 ? 'carousel-arrow-disabled' : ''"
          role="button"
          @click="activeIndex > 0 ? handleCarousel('prev') : ''"
        >
          &#60;
        </button>
        <img
          class="product__img"
          :src="data.images[activeIndex].src || data.image.src"
          :alt="data.title"
        />
        <button
          v-if="data.images.length > 1"
          class="carousel-handler carousel-next"
          :class="
            activeIndex == data.images.length - 1
              ? 'carousel-arrow-disabled'
              : ''
          "
          role="button"
          @click="
            activeIndex < data.images.length - 1 ? handleCarousel('next') : ''
          "
        >
          &#62;
        </button>
      </div>
      <div class="desc-section">
        <div class="product-descriptions">
          <p class="product__title">{{ data.title || "No Title Available" }}</p>
          <p class="product__price">
            {{ data.variants[0].price || "No Price Available" }}
          </p>
        </div>
        <div class="action-section">
          <div class="detail-icon"><span>i</span></div>
          <!-- <span>See details!</span> -->
        </div>
      </div>
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductsList extends Vue {
  @Prop() private data!: any;
  activeIndex = 0;
  /**
   * @descriptions Handle with pagination actions to set pagination's active index
   * @param {string}: action action's type
   */
  handleCarousel(action: string) {
    action == "prev" ? (this.activeIndex -= 1) : (this.activeIndex += 1);
    action == "prev-first"
      ? (this.activeIndex = 0)
      : action == "next-last"
      ? (this.activeIndex = this.data.images.length - 1)
      : "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  // border: 2px solid #457b9d;
  border-radius: 15px;
  width: 300px;
  height: 400px;
  list-style: none;
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
  .product__img {
    width: 100%;
    height: 90%;
  }
  .product__title {
    // font-size: 20px;
    inline-size: 170px;
    font-size: calc(0.55em + 1vmin);
    font-weight: 400;
    text-align: left;
  }
  .product__price {
    font-weight: 800;
  }

  .desc-section {
    display: flex;
    background: #1d3557;
    p {
      color: #f1faee;
    }
    .action-section {
      padding: 30px 33px;
    }
  }
  .product-descriptions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 15px;
    flex: 1;
    border-right: 2px solid #f1faeec7;
  }
  .detail-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border: 1px solid white;
    border-radius: 50%;
    color: white;
    span {
      font-size: 22px;
    }
    transition: transform 0.4s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}
.img-wrapper {
  display: flex;
  position: relative;
  height: 300px;
  align-items: center;
}
.carousel-handler {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: #efefef;
  color: #939393;
}
</style>
