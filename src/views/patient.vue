<template>
	<div>
		
		<mt-header title="服务统计">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click="handleClose"></mt-button>
			</router-link>
			<mt-button slot="right" @click="more"></mt-button>	 
		</mt-header>
		 <!-- <div class="aa">
			<div class="div_sech">
			  <form action="" target="frameFile"><mt-search v-model="value" cancel-text="取消"  placeholder="搜索" @keyup.enter.native="searchData" class="one" style="background-color: #DCDCDC;"></mt-search></form>
			  <iframe name='frameFile' style="display: none;"></iframe>
			</div>
		 </div> -->
		 <van-col span="13" class="selects">
			 <div class="left">
				 <van-dropdown-menu class="select">
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
		 <van-row class="people">
		   <van-col span="9">
			   <div class="people-left">
				   <img src="" alt="">
				   <p>jaa</p>
			   </div>
			  
		   </van-col>
		   <van-col span="15">
			    <div class="people-right">
					<div>
						<img src="../assets/logo.png" alt="">
					</div>
			   </div>
		   </van-col>
		 </van-row>
		 
	</div>
	
</template>

<script>
import {Search} from 'mint-ui'
	export default{
		data(){
			return{
				 value: '',
				 value1: 0,
				 value2: 0,
				 option1: [{
				 		text: "抚养方式",
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
				 option2: [{
				 		text: "状态",
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
			}
		},
		components:{
			'mt-search':Search
		}
		
	}
</script>

<style>
	.mint-header {
		background-color: #ffffff;
		box-sizing: border-box;
		color: #000;
		display: flex;
		font-size: 1.45rem;
		line-height: 2;
		padding: 0px -7px;
		position: relative;
		height: 4rem;
	}
	
	..mint-header-title {
		white-space: nowrap;
		font-size: 3rem;
		font-weight: 380;
		margin-left: 0.8;
		margin-left: -12rem !important;
		color: #3D444D;
	}
	.aa{
		height: 3rem;
		background-color: #FFFFFF;
		width: 100%;
	}
	.one{
		/* background-color: red; */
	}
	.selects{
		width: 100%;
		    height: 3.2rem;
		background-color: pink;
	}
	.left{
		float: left;
		width: 50%;
	}
	.right{
		width: 50%;
		float: right;
	}
	 .searchWrap {
	    margin: 5px 8px;
	    background: #fff;
	  }
	  .mint-searchbar{
	    padding:5px 5px 0 5px;
	    box-sizing: border-box
	  }
	.people{
		width: 95%;
		height: 5rem;
		background-color: #FFFFFF;
		/* margin-top: 4rem; */
		margin: 4rem auto;
		border-radius: 0.4rem;
	}
	/* .people-left{
		width: 30%;
		line-height: 5rem;
		background-color: pink;
		float: left;
	}
	.people-right{
		width: 30%;
		line-height: 5rem;
		background-color: pink;
		float: right;
	} */
	
</style>
