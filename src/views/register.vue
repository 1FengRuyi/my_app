<template>
	<div>

		<mt-header title="服务统计">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click="handleClose"></mt-button>
			</router-link>
			<mt-button slot="right" @click="more"></mt-button>
			<div class="div_sech">
  <form action="" target="frameFile"><mt-search v-model="value" cancel-text="取消"  placeholder="搜索" @keyup.enter.native="searchData"></mt-search></form>
  <iframe name='frameFile' style="display: none;"></iframe>
</div>
		</mt-header>
		<!-- <div class="aa">
			<div class="div_sech">
			  <form action="" target="frameFile"><mt-search v-model="value" cancel-text="取消"  placeholder="搜索" @keyup.enter.native="searchData" class="one" style="background-color: #DCDCDC;"></mt-search></form>
			  <iframe name='frameFile' style="display: none;"></iframe>
			</div>
		 </div> -->
		<van-col span="13" class="selects">
			<div class="left">
				<van-dropdown-menu class="select" id="fuyang">
					<van-dropdown-item v-model="value1" :options="option1" />
					<!-- <van-dropdown-item v-model="value1" :options="option2" /> -->
				</van-dropdown-menu>
			</div>
			<div class="right">
				<van-dropdown-menu class="select">
					<van-dropdown-item v-model="value2" :options="option2" />
				</van-dropdown-menu>
			</div>
		</van-col>

		<!-- 居中 -->

		
		<div class="people">
			<div class="people-left">
				<img src="../components/user/home_item2.png" alt="">
			</div>

			<div class="people-right">
				<div>
					<ul class="youxul">
						<li>王海夫</li>
						<li class="bb">服务方式</li>
						<li>上次的服务</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="people">
			<div class="people-left">
				<img src="../components/user/home_item2.png" alt="">
			</div>
		
			<div class="people-right">
				<div>
					<ul class="youxul">
						<li>王海夫</li>
						<li class="bb">服务方式</li>
						<li>上次的服务</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="people">
			<div class="people-left">
				<img src="../components/user/home_item2.png" alt="">
			</div>
		
			<div class="people-right">
				<div>
					<ul class="youxul">
						<li>王海夫</li>
						<li class="bb">服务方式</li>
						<li>上次的服务</li>
					</ul>
				</div>
			</div>
		</div>


	</div>

</template>

<script>
	import {
		Search
	} from 'mint-ui'
	export default {
		data() {
			return {
				value: '',
				value1: 0,
				value2: 0,
				option1: [{
						text: "抚养方式",
						value: 0
					},
					{
						text: "寄宿制",
						value: 1
					},
					{
						text: "居家托养",
						value: 2
					},
					{
						text: "日间照料",
						value: 2
					}
				],
				option2: [{
						text: "状态",
						value: 0
					},
					{
						text: "已认证",
						value: 1
					},
					{
						text: "未认证",
						value: 2
					}
				],
			}
		},
		components: {
			'mt-search': Search
		}

	}
</script>

<style>
	.mint-header {
		background-color: #ffffff;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #000;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		font-size: 0.45rem;
		line-height: 2;
		padding: 0px -7px;
		position: relative;
		height: 2rem;
	}

	..mint-header-title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.7rem !important;
		font-weight: 400;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		margin-right: 4rem;
	}

	.aa {
		height: 3rem;
		background-color: #FFFFFF;
		width: 100%;
	}

	.one {
		/* background-color: red; */
	}

	.selects {
		width: 100%;
		height: 3.2rem;
		/* background-color: pink; */
	}

	.left {
		float: left;
		width: 50%;
		background-color: #FFFFFF;
	}

	.right {
		width: 50%;
		float: right;
	}

	.searchWrap {
		margin: 5px 8px;
		background: #fff;
	}

	.mint-searchbar {
		padding: 5px 5px 0 5px;
		box-sizing: border-box
	}

	.people {
		width: 95%;
		height: 3rem;
		margin: 1.6rem auto;
		background-color: #FFFFFF;
		/* margin-top: 4rem; */
		border-radius: 0.4rem;
	}

	.people img {
		width: 2.3rem;
		height: 2.3rem;
		margin: 0.3rem 0.3rem;
		border-radius: 3rem;
	}

	
	.youxul li {
		line-height: 0.7rem;
	}

	.youxul li:hover {
		color: red;
	}

	.youxul li:first-child {
		margin-top: 0.4rem;
		color: #000000;
		font-size: 0.5rem;
		/* color: beige; */
	}

	.youxul li:last-child,
	.bb {
		color: darkgrey;
		font-size: 0.4rem;
	}

	.people-left {
		width: 20%;
		float: left;
		
	}

	.people-right {
		width: 70%;
		float: right;
	}
</style>
