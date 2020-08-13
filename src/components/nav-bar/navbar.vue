<template>
	<van-tabbar v-model="active" route class="active_tab">
		<!-- <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)"> -->
		<van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="item.href">
			<span :class="currIndex == index ? active:''">{{item.title}}</span>
			<template slot="icon" slot-scope="props">
				<img :src="props.active ? item.active : item.normal">
			</template>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
		name: "nav-bar",
		data() {
			return {
				currIndex: 0,
				active: 0,
				tabbars: [{
						name: "home",
						title: "首页",
						href: '/',
						normal: require("@/assets/tab_home.png"),
						active: require("@/assets/tab_home_active.png")
					},
					{
						name: "service",
						title: "服务",
						href: '/service',
						normal: require("@/assets/tab_home.png"),
						active: require("@/assets/tab_home_active.png")
					},
					{
						name: "onepeople",
						title: "个人中心",
						href: '/onepeople',
						normal: require("@/assets/tab_home.png"),
						active: require("@/assets/tab_home_active.png")
					}
				]
			};
		},
		methods: {
			tab(index, val) {
				this.currIndex = index;
				this.$router.push(val);
			}
		}
	};
</script>
