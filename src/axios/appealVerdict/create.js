import axios from 'axios';
import config from '../../utils/config';

const baseURL = config.heroku_url || config.localhost_url;

const createAppealVerdict = async (body, headers, cb) => {
	return axios.post(baseURL + '/officer/appeal/verdict/create', body, {
		headers
	}).then(r => {
		if (cb) {
			cb(r.data, null);
		}
	}).catch(error => {
		if (cb) {
			cb(null, error.data);
		}
	});
};

export default createAppealVerdict;
