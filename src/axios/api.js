import { get, post, put, del } from './http'
//环境的切换
var url = '';
if (process.env.NODE_ENV == 'development') {
    url = '/url';
} else if (process.env.NODE_ENV == 'production') {
    url = window.g.url;
}
export default {
    // 邮件
    getOrderCount(p) { return post(url + '/gmail/send', p) },
}