import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import user from '@/src/views/service.vue'
import store from '../store'
 Vue.use(Router)
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
	  {
	  	  path: '/',
	  	  name: 'onece',
	  	  component: resolve => require(["@/views/onece.vue"], resolve),
	  	},
	  {
	  	  path: '/login',
	  	  name: 'login',
	  	  component: resolve => require(["@/components/login/login.vue"], resolve),
	  	},
    {
      path: '/user',
      name: 'user',
      component: resolve => require(["@/components/user/user.vue"], resolve),
    },{
		  path: '/service',
		  name: 'service',
		  component: resolve => require(["@/views/service.vue"], resolve),
		},{
		  path: '/register',
		  name: 'register',
		  component: resolve => require(["@/views/register.vue"], resolve),
		},{
		  path: '/card',
		  name: 'card',
		  component: resolve => require(["@/views/card.vue"], resolve),
		},{
		  path: '/onepeople',
		  name: 'onepeople',
		  component: resolve => require(["@/views/onepeople.vue"], resolve),
		},{
		  path: '/onepe',
		  name: 'cardhistory',
		  component: resolve => require(["@/views/cardhistory.vue"], resolve),
		}
	// {
	// 	path: '/service',
	// 	name: 'service',
	// 	component: service
	// }
  ]
})
