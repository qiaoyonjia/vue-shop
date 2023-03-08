<template>
 <div class="home">
  这是首页
  <Tabbar/>
 </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'

 export default {
   name: 'Home',
   props: {
   },
   components: {
    Tabbar
   },
   data () {
     return {

     }
   },
   methods: {

   },
 }
</script>

<style scoped>

</style>