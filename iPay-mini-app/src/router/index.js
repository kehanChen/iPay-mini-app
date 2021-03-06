import Vue from 'vue'
import Router from 'vue-router'
import Phone from '@/components/phone/phone.vue'
import Else from '@/components/else/else.vue'
import HistoryOrder from '@/components/history/history.vue'
import Help from '@/components/help/help.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: Phone
    }, {
      path: '/else',
      component: Else
    }, {
      path: '/history',
      component: HistoryOrder
    }, {
      path: '/help',
      component: Help
    }

  ]
})
