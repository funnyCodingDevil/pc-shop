<template>
  <!-- 顶部通栏 -->
  <AppTopNav />
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 吸顶头部 -->
  <AppHeaderSticky></AppHeaderSticky>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter/>
</template>

<script>
import AppTopNav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppTopNav,
    AppHeader,
    AppHeaderSticky,
    AppFooter
  },
  // 获取分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
