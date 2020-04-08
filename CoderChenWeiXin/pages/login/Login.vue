<template>
	<view>
		<button @click="loginClick">登录</button>
	</view>
</template>

<script>
	export default {
		// onLoad() {
		// 	let str = uni.getStorageSync("userId")
		// 	console.log(str)

		// 	if(str){
		// 		uni.switchTab({
		// 				url: "../message/message"
		// 			})
		// 	}

		// },
		methods: {
			loginClick() {
				uni.switchTab({
						url: "../message/message"
					}),
					uni.setStorageSync("userId", "123456")
			}
		}
	}
</script>

<style>
</style>
