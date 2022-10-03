<template>
  <!-- 一级路由 -->
  <router-view></router-view>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'App',
  components: {},
  setup() {
    const fn = () => {
      request('/member/profile', 'get', { a: 10 })
    }
    return { fn }
  }
}
</script>

<style scoped>

</style>
