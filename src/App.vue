<template>
	<div id="app">
		<!-- <login></login> -->
		<NavBar></NavBar>
		<!-- <User></User> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import NavBar from './components/nav-bar/navbar.vue'
	// import login from './components/login/login.vue'
	// import User from './components/user/user.vue'
	export default {
		name: 'App',
		components: {
			NavBar: NavBar
			// login:login
			// User:User
		}
	}
</script>

<style>
	html {
	    -webkit-tap-highlight-color: transparent;
	    background-color: #F5F5F5;
	}
</style>
