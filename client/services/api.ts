import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

export const api = axios.create({
	baseURL: 'http://localhost:9000',
	headers: {
		authorization: 'Bearer ' + token,
	},
});
