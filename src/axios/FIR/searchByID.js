import axios from 'axios';
import config from '../../utils/config';

const baseURL = config.heroku_url || config.localhost_url;

const searchGDByID = (params, headers, cb) => {
	return axios.get(baseURL + '/officer/fir/byID', {
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

export default searchGDByID;