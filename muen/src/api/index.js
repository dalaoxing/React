import Axios from '../untis/http';

//登录
export const Login = (params) => Axios.post('/login', params);

//登陆
export const Register = (params) => Axios.post('/register', params);

//获取所有投票
export const allVote = (params) => Axios.get('/vote/allVote', { params });

//添加投票
export const newvote = (params) => Axios.post('/vote/newvote', params);