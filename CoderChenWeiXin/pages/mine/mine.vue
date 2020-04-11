<template>
	<view>
		<view>{{num}}</view>

		<uni-calendar :insert="true" :lunar="flag" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change"></uni-calendar>
		
		<button @click="showCalendar">是否显示日历</button>

	</view>

</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				num: "李四",
				flag:false
			}
		},
		created() {
			uni.$on("addData", (e) => {
				this.num = e
			})
		},
		methods: {
			change(e) {
				console.log(e)
			},
			showCalendar(){
				this.flag = !this.flag
			}
		}
	}
</script>

<style>
</style>
