import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '4f8609a00776439f95ba79b22f1af0c3',
	},
});
