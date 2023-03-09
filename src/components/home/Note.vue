<template>
 <div class="note">
  <span class="left"><em>重要公告!!!</em></span>
  <span class="right">真伪客服官方验证功能上线</span>
 </div>
</template>

<script>
 export default {
   name: 'Note',
   data () {
     return {

     }
   },
   methods: {

   },
 }
</script>

<style scoped>
.note {
  display: flex;
  justify-content: center;
}

.left {
  font-size: 18px;
  color: red;
  margin-right: 20px;
}

.right {
  font-size: 18px;
}
</style>