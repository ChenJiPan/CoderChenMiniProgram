const BASE_URL = "https://xxx"
export const getRequest = (options,url) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL + url,
			method:"GET",
			data:options || {},
			success: (res) => {
				resolve(res);
			}
		})
	})
}