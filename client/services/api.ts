import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

export const api = axios.create({
	baseURL: 'https://chat-server-personal.up.railway.app',
	withCredentials: true,
	headers: {
		authorization: 'Bearer ' + token,
	},
});
