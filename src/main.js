// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
	Header
} from 'mint-ui';
import {
	Cell,
	CellGroup
} from 'vant';
Vue.use(Cell).use(CellGroup);
// import { Header } from 'mint-ui';

// Vue.component(Header.name, Header);
Vue.component(Header.name, Header);
//引入mini-ui
// import Vue from 'vue';
import {
	Col,
	Row
} from 'vant';

Vue.use(Col);
Vue.use(Row);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'

// 引入vant
import {
	DropdownMenu,
	DropdownItem
} from 'vant'
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
import {
	Tabbar,
	TabbarItem
} from 'vant';


import {
	ImagePreview
} from 'vant';

import {
	Toast
} from 'vant';
Vue.use(Toast);
Vue.use(Tabbar).use(TabbarItem);


Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
	components: {
		App
	},
	template: '<App/>'
})
