<template>
	<view>
		<button @click="updateImage">上传</button>
		
		<view v-for="(value,index) in imageArr" :key="index"> 
			<image :src="value" mode="aspectFill" @click="previewImg(index)"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageArr: []
			}
		},
		mounted() {
			this.imageArr = uni.getStorageSync("chooseImg")
		},
		methods: {
			updateImage() {
				uni.chooseImage({
					count: 9,
					success: res => {
						this.imageArr = res.tempFilePaths
						uni.setStorageSync("chooseImg",this.imageArr)
						console.log(this.imageArr)
					}
				})
			},
			previewImg(index){
				uni.previewImage({
					current:index,
					urls:this.imageArr
				})
			}
		}
	}
</script>

<style>
</style>
