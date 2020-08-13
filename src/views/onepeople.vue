<template>
	<div>
		<div class="top">
			<div class="top-one">
				<div >
					<div class="peopless">
						<div class="people-left">
							<img src="../assets/home_item1.png" alt="">
						</div>
					
						<div class="people-right">
							<div>
								<ul class="youxul">
									<li>郭萍</li>
									<li class="bb">13677658964</li>
									<li>新区德仁医院 </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.top{
		width: 100%;
		height: 7rem;
		border-radius: 0rem 0rem 2.5rem 2.5rem;
		background-color:#1885F2;
		position: relative;
	}
	.top-one{
		width: 95%;
		height: 13.5rem;
		background-color: #ffffff;
		position: absolute;
		margin: 2.5rem auto;
		left:0.3rem;
		border-radius: 0.4rem;
	}
	.peopless{
		width: 95%;
		height: 3rem;
		margin: 0.6rem auto;
		background-color: #FFFFFF;
		/* margin-top: 4rem; */
		border-radius: 0.4rem;
	}
	
	.peopless img {
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
