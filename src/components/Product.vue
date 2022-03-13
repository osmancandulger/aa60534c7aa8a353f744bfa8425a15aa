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
          @click="isDetailOpen = !isDetailOpen"
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
      <div class="desc-section" :class="[{ 'detail-active': isDetailOpen }]">
        <div
          class="product-descriptions"
          :style="!isDetailOpen ? 'border-right: 2px solid #f1faeec7' : ''"
        >
          <p class="product__title">
            {{ data.title || "No Title Available" }}
          </p>
          <p class="product__price">
            {{ data.variants[0].price || "No Price Available" }}
          </p>
          <template v-if="isDetailOpen"
            ><p>
              <span class="detail-key"> Product type:</span>
              {{ data.product_type }}
            </p>
            <template v-if="data.options">
              <p
                class="product-detail-text"
                v-for="(item, index) in data.options"
                :key="index"
              >
                <span class="detail-key"> {{ item.name }}:</span>
                <!-- {{ data.options[0].values[0] || "No Size Available" }} -->
                <span
                  class="product-detail-span"
                  v-for="(value, index) in item.values"
                  :key="index"
                >
                  {{ value }}</span
                >
              </p>
            </template>
            <p>
              <span class="detail-key">Requires Shipping: </span
              >{{ data.variants[0].requires_shipping ? "Yes" : "No" }}
            </p>
            <p>
              <span class="detail-key">Taxable: </span
              >{{ data.variants[0].taxable ? "Yes" : "No" }}
            </p>
            <p>
              <span class="detail-key">Weight: </span
              >{{
                `${data.variants[0].weight.toFixed(3)}${
                  data.variants[0].weight_unit
                }`
              }}
            </p>
            <p>
              <span class="detail-key">Vendor: </span
              >{{ data.vendor || "Not Available" }}
            </p>
          </template>
        </div>
        <div :class="!isDetailOpen ? 'action-section' : ''">
          <div
            class="detail-icon"
            :class="isDetailOpen ? 'detail-open' : ''"
            @click="isDetailOpen = !isDetailOpen"
          >
            <span>{{ isDetailOpen ? "X" : "i" }}</span>
          </div>
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
  isDetailOpen = false;
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

<style scoped lang="scss">
.item {
  border-radius: 15px;
  width: 300px;
  height: 400px;
  list-style: none;
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
  .product__img {
    position: absolute;
    width: 100%;
    height: 90%;
    cursor: pointer;
    z-index: -3;
  }
  .product__title {
    inline-size: 200px;
    font-size: calc(0.55em + 1vmin);
    max-height: 41px;
    font-weight: 400;
    text-align: left;
    &::before {
      content: "Title:";
      font-weight: 800;
    }
  }
  .product__price {
    font-weight: 800;
    &::before {
      content: "Price: ";
    }
  }

  .desc-section {
    display: flex;
    background: #1d3557;
    height: 100%;
    transition: transform 0.3s ease-in;
    overflow: hidden;
    text-align: left;

    p {
      color: #f1faee;
    }
    .action-section {
      padding: 30px 17px;
    }
  }
  .product-descriptions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 15px;
    flex: 1;
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
.detail-active {
  transform: translateY(-300px);
}

.product-detail-span {
  position: relative;
}
.product-detail-span + .product-detail-span {
  left: 0.4px;
}
.detail-open {
  margin: 12px;
}
.detail-key {
  font-weight: 800;
}
.product__price {
  margin-top: -5px;
}
.carousel-next {
  position: relative;
  left: 230px;
}
.carousel-arrow-disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
</style>
