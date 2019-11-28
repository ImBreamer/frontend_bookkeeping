import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.globel_url = 'http://127.0.0.1:8087/book/';
Vue.prototype.user_info = {
	// userName:null,
	userId:null,
	nickName:null,
	face:null,
	openId:null
};

Vue.prototype.$login = function(infoCode,res){
	console.log(res);
	uni.request({
		url: this.globel_url + 'user/wx/info',
		method: 'POST',
		data: {
			jsCode: infoCode,
			avatarUrl: res.userInfo.avatarUrl,
			nickName: res.userInfo.nickName
		},
		dataType: 'json',
		success: (obj) => {
			console.log(obj.data);
			var resData = obj.data;
			if (resData.code == 2000) {
				uni.setStorageSync('isFirstLogin', false);
				uni.setStorageSync("token", resData.data.token);
				this.user_info.userId = resData.data.userId;
				this.user_info.nickName = res.userInfo.nickName;
				this.user_info.face = res.userInfo.avatarUrl;
				this.user_info.openId = resData.data.openid;
				uni.reLaunch({
					url: '../main/main',
				});
			} else {
				this.errorMsg = resData.msg;
				this.show = true;
			}
		}
	});
};

const app = new Vue({
    ...App
})
app.$mount()
