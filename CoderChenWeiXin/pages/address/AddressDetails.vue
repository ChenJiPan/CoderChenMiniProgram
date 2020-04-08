<template>
	<view>
		<navigator url="../message/message" open-type="switchTab">跳转到信息页</navigator>
		
		<button @click="getLocationClick">获取当前位置</button>
	</view>
</template>

<script>
	export default{
		methods:{
			getLocationClick(){
				console.log("华发商都")
				uni.getLocation({
					type:"wgs84",
					success: (res) => {
						console.log(res.longitude)
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
