<template>
	<div>
		<mt-header title="打卡签到">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click="handleClose"></mt-button>
			</router-link>
			<mt-button slot="right" @click="more"></mt-button>
		</mt-header>
		<div class="card">
			<div class="card-left">
				<img src="../assets/home_item3.png" alt="">
			</div>
			<div class="card-right">
				<ul>
					<li>19：20</li>
					<li>陕西省西安市雁塔区科技路西段绿地博海大厦
</li>
				</ul>
			</div>
		</div>
		
		<div class="card">
					<div class="card-left">
						<img src="../assets/home_item3.png" alt="">
					</div>
					<div class="card-right">
						<ul>
							<li>19：20</li>
							<li>陕西省西安市雁塔区科技路西段绿地博海大厦
		</li>
						</ul>
					</div>
				</div>
				
				<div class="card">
							<div class="card-left">
								<img src="../assets/home_item3.png" alt="">
							</div>
							<div class="card-right">
								<ul>
									<li>19：20</li>
									<li>陕西省西安市雁塔区科技路西段绿地博海大厦
				</li>
								</ul>
							</div>
						</div>
						
						<div class="card">
									<div class="card-left">
										<img src="../assets/home_item3.png" alt="">
									</div>
									<div class="card-right">
										<ul>
											<li>19：20</li>
											<li>陕西省西安市雁塔区科技路西段绿地博海大厦
						</li>
										</ul>
									</div>
								</div>
	</div>
</template>

<script>
	
	export default{
		// data(){
		// 	
		// }
	}
</script>

<style>
	.card{
		width: 95%;
		height: 3rem;
		background-color: white;
		border-radius:0.4rem ;
		margin: 0 auto;
		margin-top:0.5rem ;
	}
	.card-left{
		width: 20%;
		float: left;
	}
	.card-left img{
		width: 2.3rem;
		height: 2.3rem;
		margin: 0.3rem 0.3rem;
		border-radius: 3rem;
	}
	.card-right{
		width: 70%;
		float: right;
	}
	.card-right ul{
		margin-top: 0.5rem;
	}
	.card-right ul li{
		    line-height: 0.7rem;
    font-size: 0.4rem;
    margin-left: 0.1rem;
	}
</style>
