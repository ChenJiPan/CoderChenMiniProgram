<template>
	<view>

		<view class="mineContent" >
			<view @click="callPhone('18876973191')">联系我们：18876973191（点击拨打）</view>
			<view @click="callPhone('18876973191')">外卖小哥：18876973191（点击拨打）</view>
		</view>
		<view class="mapContent">
			<p>夜宵店地址：黄流镇邵逸夫中学100米处</p>
			<map :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 18.50123597,
				longitude: 108.79773617,
				covers: [{
					latitude: 18.50123597,
					longitude: 108.79773617,
					iconPath: '../../static/chaofen.jpg',
					"title":"兰姐夜宵店",
					"width":30,
					"height":30
				}]
			}
		},
		methods:{
			callPhone(num){
				console.log(num)
				uni.makePhoneCall({
					phoneNumber:num
				})
			}
		}
	}
</script>

<style>
	.mineContent {
		margin: 0 auto;
		width: 100%;
		padding: 10px;
		line-height: 30px;
	}
	.mapContent{
		margin-top: 10px;
		line-height: 30px;
	}
	.mapContent p{
		padding-left: 10px;
		padding-bottom: 10px;
	}
	.mapContent map{
		position: fixed;
		width: 100%;
		height: 100%;
	}
</style>
