<template>
  <div class="like">
    <Card>
      <span> 猜你喜欢 </span>
    </Card>
    <ul>
      <li v-for="(item, index) in likeList" :key="index">
        <h2>
          <img :src="item.imgUrl" alt="" />
          <h3>{{ item.name }}</h3>
        </h2>
        <div>
          <span>￥</span>
          <b>{{ item.price }}</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Like",
  components: {
    Card,
  },
  props: {
    likeList: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.like ul {
  display: flex;
  flex-wrap: wrap;
}

.like ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.like ul li > div {
  padding: 6px;
  width: 100%;
  text-align: left;
  /* margin-top: -10px;
  margin-left: 10px; */
  margin: -10px 0px 0px 10px;
}

.like ul li > div span {
  font-size: 12px;
  color: #b0352f;
}

.like ul li > div b {
  font-size: 16px;
  color: #b0352f;
  font-weight: 600;
}

.like h3 {
  /* display: block; */
  padding: 6px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #222222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.like img {
  width: 176px;
  height: 176px;
}
</style>