<template>
	<view style="overflow: hidden;">
		<scroll-view :scroll-top="1" :scroll-y="true">
			<view v-for="(value,index) in messageList" :key="index" class="content">
				<image src="../../static/message.png" mode="aspectFill" class="messageImage"></image>
				<view>
					<p class="messageName">{{value.name}}</p>
					<p class="meesageContent">{{value.message}}</p>
				</view>
				
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageList: [{
						name: "张三",
						message: "你好，欢迎来到深圳"
					},
					{
						name: "李四",
						message: "你好，欢迎来到北京"
					},
					{
						name: "王五",
						message: "你好，欢迎来到上海"
					},
					{
						name: "赵四",
						message: "你好，欢迎来到中国"
					},
					{
						name: "谢广坤",
						message: "你好，欢迎来到海南"
					},
					{
						name: "春华",
						message: "你好，欢迎来到广州"
					},
					{
						name: "小明",
						message: "你好，欢迎来到潮汕"
					},
					{
						name: "苏明玉",
						message: "你好，欢迎来到韶关"
					},
					{
						name: "苏明哲",
						message: "你好，欢迎来到东莞"
					}
				]
			}

		},
		onPullDownRefresh() {
			console.log("下拉刷新")
			setInterval(() => {
				this.messageList = [{
						name: "张三",
						message: "你好，欢迎来到深圳"
					},
					{
						name: "谢广坤",
						message: "你好，欢迎来到海南"
					},
					{
						name: "春华",
						message: "你好，欢迎来到广州"
					},
					{
						name: "小明",
						message: "你好，欢迎来到潮汕"
					},
					{
						name: "苏明玉",
						message: "你好，欢迎来到韶关"
					},
					{
						name: "苏明哲",
						message: "你好，欢迎来到东莞"
					},
					{
						name: "李四",
						message: "你好，欢迎来到北京"
					},
					{
						name: "王五",
						message: "你好，欢迎来到上海"
					},
					{
						name: "赵四",
						message: "你好，欢迎来到中国"
					}
				]
				uni.stopPullDownRefresh()
			},2000);
			
		},
		onReachBottom() {
			console.log("页面触发底部")
		}
	}
</script>

<style>
	.content {
		display: flex;
		/* background-color: #007AFF; */
		/* display: flex; */
		/* position: absolute; */
	}
	.messageImage{
		padding: 20rpx 20rpx 0rpx 20rpx;
		width: 120rpx;
		height: 120rpx;
	}
	.messageName{
		/* display: block; */
	}
	.meesageContent{
		/* display: block; */
	}
</style>
