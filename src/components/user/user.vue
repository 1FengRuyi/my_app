<template>
	<div>
		<!-- 导航 -->
		<van-row class="header">
			<van-col span="6">
				<span class="index">首页</span>
			</van-col>
			<van-col span="13">
				<van-dropdown-menu class="select">
					<van-dropdown-item v-model="value1" :options="option1" />
				</van-dropdown-menu>
			</van-col>
			<van-col span="5">
				<span class="dao" @click="goCarddistroy">签到</span>
			</van-col>
		</van-row>
		<!-- 导航完 -->
		<!-- 轮播图 -->
		<div class="swiper">
			<mt-swipe :auto="2000">
				<mt-swipe-item v-for="item in items" :key="item.id">
					<a :href="item.href" rel="external nofollow">
						<img :src="item.url" id="imgss" />
						<span class="desc"></span>
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- 轮播图完 -->
		<!-- 服务机构 -->
		<div id="service">
			<div class="service-left">
				<p class="service-gang"></p>
			</div>
			<div class="service-right">
				<span class="service-zi">服务机构</span>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div id="doctor">
			<img src="" alt="">
			<div class="doctor-left">

				<!-- <p>hh</p> -->
				<img src="../../assets/home_logo.png" alt="">
			</div>
			<div class="doctor-right">
				<ul>
					<li class="one">铜川新区德仁医院</li>
					<li class="two">三级甲等 新区大唐五路樱园路3号</li>
				</ul>
			</div>
		</div>
		<div style="clear: both;"></div>
		<!-- 服务机构-->
		<div style="clear: both;margin-bottom: -5rem;"></div>
		<!-- 服务统计 -->
		<div id="service">
			<div class="service-left">
				<p class="service-gang"></p>
			</div>
			<div class="service-right">
				<span class="service-zi" @click="goServise">服务机构</span>
			</div>
		</div>
		<!-- 服务统计完-->
		<div style="clear: both;"></div>
		<!--服务项目 -->
		<div class="tablesss">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="address" label="地区" width="70">
				</el-table-column>
				<el-table-column prop="put" label="寄宿制" width="70">
				</el-table-column>
				<el-table-column prop="care" label="日间照料" width="80">
				</el-table-column>
				<el-table-column prop="home" label="居家照料" width="80">
				</el-table-column>
				<el-table-column prop="sum" label="合计" width="55">
				</el-table-column>
				<el-table-column prop="xiang" label="详情" width="50">
				</el-table-column>
			</el-table>
		</div>
		<!-- 服务统计完-->
		<div style="clear: both;"></div>
		<!--服务项目完-->
		<div id="service">
			<div class="service-left">
				<p class="service-gang"></p>
			</div>
			<div class="service-right">
				<span class="service-zi">服务统计</span>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="bottom">
			<div class="bottom-one">
				<!-- <ul id="bottom-zi">
					<li>寄宿制</li>
					<li>托养方式</li>
					<li>的特点</li>
				</ul> -->
				<p>.</p>
			</div>
			<div class="bottom-two">
				<p>.</p>
			</div>
			<div class="bottom-three">
				<p>.</p>
			</div>
		</div>
		<div style="margin-top: 2rem;"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'mint-ui'
	export default {
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem
		},
		data() {
			return {
				value1: 0,
				option1: [{
						text: "西安",
						value: 0
					},
					{
						text: "安康",
						value: 1
					},
					{
						text: "上海",
						value: 2
					}
				],
				items: [{
						title: '你的名字',
						href: 'http://google.com',
						url: require('./home_item1.png')
					}, {
						title: '我的名字',
						href: 'http://baidu.com',
						url: require('./home_item2.png')
					},

				],
				tableData: [{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'

				}]

			}
		},
		methods: {
			goServise() {
				// alert("你好"),
					this.$router.push('/service')
			},
			go() {
				this.$router.push('/register')
			},
			goCarddistroy(){
				// this.$router.push('/cardhistory')
				this.$router.push('/card')

			}
		}
	}
</script>

<style>
	.header {
		height: 2rem;
		/* background-color: red */
	}

	.van-col {
		float: left;
		box-sizing: border-box;
		line-height: -3rem;
		height: 2rem;
		padding-top: 0.3rem;
		background-color: #ffffff;
	}

	.index {
		font-size: 0.65rem;
		margin-left: 0.4rem;
	}

	.van-dropdown-menu__bar {
		width: 2rem;
		height: 1rem;
		margin-top: 0.1rem;
		background-color: #D9ECFF;
		-webkit-box-shadow: 0 2px 12px rgba(100, 101, 102, .12);
		box-shadow: 0 2px 12px rgba(100, 101, 102, .12);
		border-radius: 0.3rem;
	}

	.dao {
		font-size: 0.6rem;
		line-height: 1rem;
	}

	.swiper,
	#service,
	#service-a {
		/* background-color: pink; */
		margin: 0.5rem auto;
		border-radius: 0.3rem;
		/* margin-top: -6rem; */
	}

	.swiper {
		/* background-color: pink; */

		width: 95%;
		height: 4rem;
	}

	#imgss {
		clear: both;
		height: 7.4rem;
	}

	#service,
	#serviceone {
		width: 91%;
		height: 2rem;
		/* background-color: pink; */
		clear: both;
	}

	#service {

		margin-top: -10px;
	}

	#serviceone {

		margin-top: -10px;
	}

	#service-a {
		width: 91%;
		height: 2rem;
		/* background-color: pink; */
		clear: both;
		margin-top: -9px;
	}

	.service-gang {
		width: 0.14rem;
		height: 0.7rem;
		border-radius: 0.3rem;
		background-color: #1885F2;
		margin-top: 0.16rem;

	}


	.service-left {
		width: 3%;
		float: left;
	}

	.service-right {
		width: 97%;
		line-height: 1rem;
		/* background-color: pink; */
		float: right;

	}

	.service-zi {
		font-size: 0.54rem;
		color: #3D444D;
	}

	#doctor,
	.tablesss {
		width: 95%;
		margin: -1rem auto;
		border-radius: 0.4rem;

	}

	#doctor {
		/* margin-bottom: -10rem; */
		background-color: #FFFFFF;
		line-height: 3rem;
	}

	.doctor-left {
		width: 27%;
		float: left;
	}

	.doctor-left img {
		width: 2.4rem;
		margin-left: 12px;
		margin-top: 10px;
	}

	.doctor-right {
		line-height: 1.1rem;
		width: 73%;
		float: right;
	}

	#xiangmu {
		width: 95%;
		line-height: 2rem;
		background-color: #FFFFFF;
		margin: 0 auto;
	}

	#imgs {
		font-size: 0.6rem;
		line-height: 1rem;
	}

	.one {
		margin-left: 0.6rem;
		font-size: 0.5rem;
		/* margin: 0.1rem 0.3rem; */
		margin-top: 0.4rem;
	}

	.two {
		margin-left: 0.6rem;
		font-size: 0.4rem;


	}

	.mint-swipe-indicators {
		position: absolute;
		bottom: 0.5rem;
		left: 75%
	}

	.tablesss {
		height: 5rem;
	}

	.a {
		width: 6.8rem;
		left: 4px;

	}

	.bottom {
		width: 95%;
		line-height: 2rem;
		margin: -1rem auto;
		background-color: #FFFFFF;
	}



	#bottom-zi li {
		/* position: absolute; */
		top: -2rem;

	}

	.bottom-one,
	.bottom-two,
	.bottom-three {
		width: 33%;
		line-height: 2rem;
		float: left;
		/* background-color: pink; */
		/* background-image: url(home_item1.png); */
	}

	.bottom-one {
		background-image: url(home_item1.png);
		background-repeat: no-repeat;
		background-size: 3rem;
		line-height: 3rem;
	}

	.bottom-two {
		background-image: url(home_item2.png);
		background-repeat: no-repeat;
		background-size: 3rem;
		line-height: 3rem;
	}

	.bottom-three {
		background-image: url(home_item3.png);
		background-repeat: no-repeat;
		background-size: 3rem;
		line-height: 3rem;
	}
</style>
