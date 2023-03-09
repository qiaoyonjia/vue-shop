<template>
 <div class="tab-bar">
  <ul>
    <li v-for="(item,index) in routerList" 
        :key="index"
        @click="switchTab(item.path)"
    >
      <img :src="$route.path.includes(item.path) ? item.selected : item.active" alt="">
      <span :class="$route.path.includes(item.path) ? 'active' : ''">{{item.title}}</span>
    </li>
  </ul>
 </div>
</template>

<script>
 export default {
   name: 'Tabbar',
   data () {
     return {
      routerList:[
        {
          title: '首页',
          path: '/home',
          active: './images/home.png',
          selected: '/images/home-select.png'
        },
        {
          title: '分类',
          path: '/list',
          active: './images/list.png',
          selected: '/images/list-select.png'
        },
        {
          title: '购物车',
          path: '/cart',
          active: './images/cart.png',
          selected: '/images/cart-select.png'
        },
        {
          title: '我的',
          path: '/archive',
          active: './images/my.png',
          selected: '/images/my-select.png'
        },
      ]
     }
   },
   methods: {
    // 点击跳转
    switchTab(path) {
      // 解决重复点同一个路由报错问题
      if (this.$route.path == path) return;
      this.$router.replace(path)
    }
   },
 }
</script>

<style scoped>
.tab-bar {
  /* 定位在最下方 */
  position: fixed;
  left: 0;
  bottom: 0;
  /* 设置层叠顺序，使其在最上方 */
  z-index: 999;
  width: 100%;
  height: 60px;
  background-color: #fff;
}

.tab-bar ul {
  /* 水平布局 */
  display: flex;
  /* 均匀排列每个元素 每个元素周围分配相同的空间 */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}

.tab-bar ul li {
  display: flex;
  /* 垂直显示 */
  flex-direction: column;
  align-items: center;
}

.tab-bar ul li img {
  width: 31px;
}

.tab-bar ul li span {
  text-align: center;
  font-size: 16px;
}

.active {
  color: red;
}
</style>