import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
// 三个模块
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储名字
      key: 'rabbit-client-pc-store',
      // 需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
// // A模块
// const moduleA = {
//   state: {
//     username: '模块A'
//   },
//   getters: {
//     newName(state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName(state) {
//       state.username = 'moduleAAA'
//     }
//   }
// }
// const moduleB = {
//   namespaced: true,
//   state: {
//     username: '模块B'
//   },
//   getters: {
//     newName(state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     // 改数据函数
//     updateName(state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     // 请求数据函数
//     updateName(ctx) {
//       // 发请求
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   }
// }
// // B模块
// export default createStore({
//   modules: {
//     moduleA,
//     moduleB
//   }
// })
// vue2 创建仓库 new Vuex.Store({})
// 创建vuex仓库并导出
// export default createStore({
//   state: {
//     // 数据
//     username: 'zs'
//   },
//   getters: {
//     // vuex的计算属性
//     newName(state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     // 改数据函数
//     updateName(state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     // 请求数据函数
//     updateName(ctx) {
//       // 发请求
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   },
//   modules: {
//     // 分模块
//   }
// })
