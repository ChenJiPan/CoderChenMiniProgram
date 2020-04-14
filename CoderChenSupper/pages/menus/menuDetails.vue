<template>
	<view>
		<image :src="model.srcImg" mode="aspectFill" class="menuDetailsImg"></image>
		<text class="menuDetailsText">名称：{{model.name}}</text>
		<text class="menuDetailsText">分量：{{model.amount}}</text>
		<text class="menuDetailsText">主料：{{model.material}}</text>
	</view>
</template>

<script>
	export default{
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			this.model = item;
		},
		data(){
			return{
				model:{}
			}
		}
	}
</script>

<style>
	.menuDetailsImg{
		width: 100%;
	}
	.menuDetailsText{
		display: block;
		font-size: 17px;
		padding: 5px 10px 0px 10px;
	}
</style>
