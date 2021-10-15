import axios from 'axios';
import config from '../../utils/config';

const baseURL = config.heroku_url || config.localhost_url;

const updateGD = (params, body, headers, cb) => {
	return axios.post(baseURL + '/officer/gd/update', body, {
		params,
		headers
	}).then(r => {
		if (cb) {
			cb(r.data, null);
		}
	}).catch(err => {
		if (cb) {
			cb(null, {
				message: err.response.data.error,
				errorCode: err.response.status
			});
		}
	});
};

export default updateGD;
