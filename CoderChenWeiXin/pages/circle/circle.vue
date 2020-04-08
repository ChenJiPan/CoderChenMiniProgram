<template>
	<view class="box">
		<text @click="ppppppp">{{title}}</text>
		<button @click="ppppppp">跳转</button>
		<navigator url="../address/AddressDetails" >跳转咯</navigator>
		
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				title:"张三哥"
			}
		},
		methods:{
			ppppppp(){
				uni.navigateTo({
					url:"../address/AddressDetails"
				})
			}
		}
	}
</script>

<style>
</style>
