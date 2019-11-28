<template>
	<view>
		<view class="mine-header">
			<image :src="faceImage"></image>
		</view>
		<view class="mine-middle"></view>
		<view class="mine-bottom"></view>
	</view>
</template>

<script>
	var infoCode;
	export default {
		data() {
			return {
				title: 'Hello',
				faceImage: '',
			}
		},
		onLoad() {
			if(this.user_info.openId == null){
				uni.reLaunch({
					url: '../login/login'
				});
			}else{
				this.faceImage = this.user_info.avatarUrl;
			}

		},
		methods: {
			
		}
	}
</script>

<style>
	.mine-header {
	}

	.mine-middle {
	}

	.mine-bottom {
	}

</style>
