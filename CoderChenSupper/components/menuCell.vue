<template>
	<view class="menuCellBox" :menuModel="menuModel" @click="pushMenu">
		<image :src="menuModel.srcImg" mode="aspectFill" class="menuCellImg" ></image>
		<view>
			<p class="menuCellName">{{menuModel.name}}</p>
			<p class="menuCellAmount">{{menuModel.amount}}</p>
			<p class="menuCellMoney">{{menuModel.money}}</p>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			menuModel:Object
		},
		methods:{
			pushMenu(){
				uni.$emit("pushMenu",this.menuModel)
			}
		}
	}
</script>

<style>
	.menuCellBox {
		display: flex;
		background-color: #FFFFFF;
		padding: 8px 10px;
		margin-bottom: 2px;
	}
	.menuCellImg{
		width: 30%;
		height: 80px;
		border-radius: 5px;
		margin-right: 10px;
	}
	.menuCellName{
		margin-top: 3px;
		margin-right: 10px;
		font-size: 16px;
		font-weight: bold;
	}
	.menuCellAmount{
		display: inline-block;
		background-color: #C0C0C0;
		border-radius: 6px;
		padding: 2px 4px;
		font-size: 10px;
		margin-top: 5px;
		
	}
	.menuCellMoney{
		margin-top: 5px;
		color: #b50e03;
		font-size: 16px;
	}
</style>
