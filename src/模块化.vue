<template>
  <div>
    <!-- 使用模块A的username -->
    <p>A的username --- {{$store.state.moduleA.username}}</p>
    <p>A的changeName --- {{$store.getters.newName}}</p>
    <hr>
    <p>B的username --- {{$store.state.moduleB.username}}</p>
    <p>B的username --- {{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const mutationsFn = () => {
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      store.dispatch('moduleB/updateName')
    }
    return {
      mutationsFn,
      actionsFn
    }
  }
}
</script>

<style scoped lang="less">

</style>
