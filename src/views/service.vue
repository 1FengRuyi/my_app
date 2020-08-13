<template>
	<div>
		<mt-header title="服务统计">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click="handleClose"></mt-button>
			</router-link>
			<mt-button slot="right" @click="more"></mt-button>
			<span>镇</span>
		</mt-header>
		<el-container class="mains">
			<el-main id="mains-top">
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
			</el-main>
		</el-container>
		<!-- <van-row type="flex" justify="center">
				  <van-col class="content"> -->

		<!--  </van-col>
				</van-row> -->

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'

				},
				{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'
				
				},
				{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'
				
				},
				{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'
				
				},
				{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'
				
				},
				
				{
					address: '耀州区',
					put: '10|15',
					care: '10|15',
					home: '10|15',
					sum: '10|15',
					xiang: '>'
				
				},
				]
			}
		},
		methods: {
			handleClose: function() {
				// console.log("返回")
			},
			more: function() {
				console.log("更多")
			}
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
    /* font-size: 1.45rem; */
    line-height: 2;
    padding: 0px -7px;
    position: relative;
    height: 2rem;
	}

	..mint-header-title {
		   overflow: hidden;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    font-size: 0.6rem !important;
    -ms-flex: 1;
    margin-right: 4rem;
	}

	.mains {
		    width: 92%;
    height: 13.5rem;
    background-color: #ffffff;
    border-radius: 0.4rem;
    font-size: -5rem;
    margin: 0.5rem auto;
	}
.el-main {
		display: block;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
		overflow: auto;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		/* padding: 20px; */
	}
</style>
