<template>
  <div class="container">
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: 'Home',
  components: { HomeCategory }
}
</script>

<style scoped lang='less'>

</style>
