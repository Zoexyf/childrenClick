import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'
import PhotosInfo from './components/photos/PhotosInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'

import BodyCheck from './components/bodycheck/BodyCheck.vue'

import ShuttleSituation from './components/shuttle/ShuttleSituation.vue'
import Weather from './components/weather/Weather.vue'
import Introduce from './components/introduce/Introduce.vue'


var router = new VueRouter({
  routes: [//配置路由规则的
   {path:'/',component: HomeContainer},
   {path:'/home',component: HomeContainer},
   {path:'/member',component: MemberContainer},
   {path:'/cart',component: CartContainer},
  //  {path:'/search',component: SearchContainer},
   {path:'/newslist',component: NewsList},
   {path:'/newsinfo/:id',component: NewsInfo},
   {path:'/home/photoslist',component: PhotosList},
   {path:'/home/photosinfo/:id', component: PhotosInfo},
   {path:'/home/goodslist', component: GoodsList},

  //  {path:'/home/photoslist',component:PhotosList},

   {path:'/home/bodycheck',component: BodyCheck},

   {path:'/home/shuttle',component: ShuttleSituation},
   {path:'/home/weather',component: Weather},
   {path:'/home/introduce',component: Introduce},
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

// 把路由对象暴露出去
export default router