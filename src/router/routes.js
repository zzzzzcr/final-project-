//引入路由组件进行配置
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Profile from '../pages/Profile/Profile.vue'
import Worth from '../pages/Worth/Worth.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default[

  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/category',
    component:Category

  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/worth',
    component:Worth
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/',
    redirect:'/msite'
  }



]