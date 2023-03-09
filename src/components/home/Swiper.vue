<template>
  <div class="swiper-main">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt="" />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
//  引入swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    swiperList: Array,
  },
  data() {
    return {
      //   {
      //     id: 1,
      //     imgUrl: "./images/swiper1.jpeg",
      //   },
      //   {
      //     id: 2,
      //     imgUrl: "./images/swiper2.jpeg",
      //   },
      //   {
      //     id: 3,
      //     imgUrl: "./images/swiper3.jpeg",
      //   },
      // ],
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    callback() {},
  },
};
</script>

<style scoped>
.swiper-main {
  position: relative;
  width: 100%;
  height: 4.4rem;
}
.swiper-container {
  width: 100%;
  height: 4.4rem;
}
.swiper-main img {
  width: 100%;
  height: 4.4rem;
}
.swiper-pagination {
  width: 100%;
  bottom: 0px;
}
::v-deep .swiper-pagination-bullet-active {
  background-color: #b0352f;
}
::v-deep .swiper-pagination-bullet {
  margin: 0 0.08rem;
}
</style>