### vuex  vue的状态管理模式
```
1 state
  存放的是状态   （直接改变state的方法写在methods里面）
2 getters
  暴漏出状态   
  ps:(state,getters写在computed里面)
3 mutations 
  唯一修改状态（能被跟踪到）
  mutations内部不能使用异步，因为不能被实时跟踪。
  方法：addcount(state){}
  调用的时候store.commit('mutations里面的方法名')
4 actions 
  actions内部支持异步，可被实时跟踪。
  异步提交mutations从而修改状态
  方法:addcount(context){
      context.commit('mutations里面的addcount')
  }
  调用的时候store.dispatch('actions里面的方法名')
5 modules模块化概念
 	Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上  	至下进行同样方式的分割
  应用场景：
  购物车状态
  用户状态
  订单状态...
6 辅助函数  mapState  mapGetters mapMutations mapActions
其中mapState mapGetters写在computed里面
mapMutations mapActions写在methods里面
这些函数实际上是把store里面的state,getters,mutations,actions映射到组件里面，可以在组件里面共享状态。
```
ps:
1. computed里面放的都是属性，即使是以函数形式（如getcount(){})形式书写，调用的时候直接用getcount即可。 computed内部必须写返回值。
2. namespaced 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名



### 项目思路
1. 构建路由（一级、二级....）
2. 全局拦截（判断是否登录）
3. 封装接口（axios请求===>根据具体的需求进一步封装请求，存取token，接口)
4. 首页（请求商品列表---上拉加载更多/下拉刷新,点击商品根据商品id跳转到商品详情页面+插槽,在商品详情页面根据id发起请求，点加入购物车判断是否登录，已登录则跳到购物车页面，未登录则跳到登录页面，若跳到登录页面没有账号，则跳到注册页面。）