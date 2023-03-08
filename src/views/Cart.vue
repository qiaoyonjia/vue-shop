<template>
 <div class="cart">
  这是购物车页
  <Tabbar/>
 </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'

 export default {
   name: 'Cart',
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