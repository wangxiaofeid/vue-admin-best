
import axios from 'axios'

// 拦截器
axios.interceptors.response.use(function (response) {
  const { data } = response;
  if (response.status == 200) {
    if (data.status == -1) {
      // 登录信息校验失败
      window.location.href="#/login";
    } else if (data.status == 1) {
      // 请求成功后返回数据部分
      return data.data
    } else {
      // 请求失败
      return Promise.reject(data.msg || '请求失败');
    }
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default function ajax(config) {
  return axios({
    method: config.method || 'post',
    url: config.url,
    data: config.data || {}
  })
}