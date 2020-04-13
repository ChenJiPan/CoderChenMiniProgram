<template>
	<view>

		<view class="mineContent">
			<p>联系我们：188888888888</p>
			<p>外卖小哥：19999999999</p>
		</view>
		<view class="mapContent">
			<p>夜宵店地址：黄流镇邵逸夫中学100米处</p>
			<map :latitude="latitude" :longitude="longitude" :markers="covers">
			</map>
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
		}
	}
</script>

<style>
	.mineContent {
		margin: 0 auto;
		width: 100%;
		padding: 10px;
		background-color: #C0C0C0;
		line-height: 25px;
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
		width: 100%;
		height: 300px;
	}
</style>
