<template>
  <div class="home">
    <div class="headers">
      <div class="headers-main">
        <Header></Header>
        <ly-tab
          v-model="selectedId"
          :items="topBar"
          :options="options"
          @change="changeTab"
        >
        </ly-tab>
      </div>
    </div>
    <!-- 主体内容 -->
    <section ref="wrapper">
      <div>
        <div v-for="(item, index) in newData" :key="index">
          <Swiper v-if="item.type === 'swiperList'" 
          :swiperList="item.data" />
          <Icons v-if="item.type === 'iconsList'" 
          :iconsList="item.data"/>
          <!-- <Note v-if="item.type === 'swiperList'" /> -->
          <Recommend v-if="item.type === 'recommendList'" 
          :recommendList="item.data"/>
          <Ad v-if="item.type === 'adList'" 
          :adList="item.data"/>
          <Like v-if="item.type === 'likeList'" 
          :likeList="item.data"/>
        </div>
      </div>
    </section>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/home/Header.vue";
import Swiper from "@/components/home/Swiper.vue";
import Icons from "@/components/home/Icons.vue";
import Note from "@/components/home/Note.vue";
import Recommend from "@/components/home/Recommend.vue";
import Like from "@/components/home/Like.vue";
import Ad from "@/components/home/Ad.vue";

// 引入插件
import BetterScroll from "better-scroll";
import axios from "axios";
export default {
  name: "Home",
  props: {},
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Note,
    Recommend,
    Like,
    Ad,
  },
  data() {
    return {
      selectedId: 0,
      topBar: [],
      newData: [],
      options: {
        activeColor: "#b0352f",
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
    });
  },
  methods: {
    // 获取首页首屏数据
    async getData() {
      let res = await axios({
        url: "/api/index_list/0/data/1",
      });

      this.topBar = Object.freeze(res.data.data.topBar);
      this.newData = Object.freeze(res.data.data.data);
      console.log("res", res.data.data.topBar);
    },
    // 切换标签事件
    changeTab(item, index) {
      console.log("item", item);
      console.log("index", index);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers {
  width: 100%;
  height: 2.88rem;
}
.headers-main {
  position: fixed;
  left: 0;
  top: 0;
}
section {
  flex: 1;
  overflow: auto;
}
::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
</style>