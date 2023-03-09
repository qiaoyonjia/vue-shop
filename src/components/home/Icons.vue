<template>
  <ul class="icons">
    <li v-for="(item, index) in iconsList" :key="index">
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Icons",
  props: {
    iconsList: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.icons {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}

.icons li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icons img {
  width: 38px;
}

.icons span {
  padding: 6px 0;
  font-size: 16px;
}
</style>