<template>
	<view class="box">
		<text @click="ppppppp">{{title}}</text>
		克拉克森的历史
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
				this.title = "李四"
			}
		},
		onLoad() {
			console.log("视图创建完成")
		},
		onShow() {
			console.log("视图出现")
		},
		onHide() {
			console.log("视图消失")
		},
		mounted() {
			console.log("更好地哈四大皆空");
		},
		
		
		
	}
</script>

<style>
</style>
