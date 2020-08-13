<template>
	<div class="header" @click="goimg">
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},methods:{
			goimg(){
				this.$router.push('/login')
			}
		}
	}
</script>

<style>
	.header{
		background-image: url(../assets/loadingpage.png);
		background-size: 100% 100%;
		height: 16.5rem;
	}
</style>
