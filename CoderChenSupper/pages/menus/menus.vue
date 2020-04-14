<template>
	<view class="pages">
		<menuCell v-for="(item,index) in menuArr" :menuModel="item" :key="index"></menuCell>
	</view>
</template>

<script>
	import menuCell from "../../components/menuCell.vue"
	export default {
		components: {
			menuCell
		},
		data() {
			return {
				menuArr: []
			}
		},
		onLoad() {
			this.getMenusData();
			uni.$on("pushMenu",(model) => {
				uni.navigateTo({
					url:"./menuDetails?item=" + encodeURIComponent(JSON.stringify(model))
				})
			});
		},
		methods: {
			getMenusData() {
				this.menuArr = [{
						name: "肉丝炒河粉",
						money: "￥12",
						amount: "1人份",
						material:"肉丝、鸡蛋、河粉、蔬菜",
						srcImg:require("../../static/menus/1.jpg") 
					},
					{
						name: "肉丝炒面",
						money: "￥12",
						amount: "1人份",
						material:"肉丝、鸡蛋、方便面、蔬菜",
						srcImg: require("../../static/menus/2.jpg")
					},
					{
						name: "鸽子粥",
						money: "￥30",
						amount: "3人份/半只",
						material:"米，鸽子（半只）",
						srcImg: require("../../static/menus/3.jpg")
					}
				]
			}
		}
	}
</script>

<style>
</style>
