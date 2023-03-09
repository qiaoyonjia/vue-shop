<template>
  <div class="ad">
    <img src="../../../public/images/dhp.jpeg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Ad",
  props: {
    adList: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.ad {
  width: 100%;
  height: 112px;
}

.ad img {
  width: 100%;
  height: 100%;
}
</style>