<template>
 <header>
  <h1>
    <img src="@/assets/images/logo_transparent.png" alt="">
  </h1>
  <div class="search">
    <i class="iconfont icon-ai219"></i>
    <span>搜您喜欢的...</span>
  </div>
  <div class="kefu">
    <i class="iconfont icon-kefu"></i>
  </div>
 </header>
</template>

<script>
 export default {
   name: 'Header',
   data () {
     return {

     }
   },
   methods: {

   },
 }
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b0352f;
  width: 100%;
  height: 60px;
}

header h1{
  widows: 77px;
  height: 66px;
  margin-right: 4px;
  margin-left: 2px;
}

header h1 img {
  width: 100%;
  height: 100%;
}

.search {
  display: flex;
  align-content: center;
  width: 246px;
  height: 30px;
  background-color: #fff;
  border-radius: 12px;
}

.search i {
  padding: 6px;
  color: #ccc;
  font-size: 24px;
}

.search span {
  font-size: 14px;
  color: #ccc;
  line-height: 30px;
}

.kefu i {
  font-size: 26px;
  color: #fff;
  margin-left: 4px;
  margin-right: 2px;
}
</style>