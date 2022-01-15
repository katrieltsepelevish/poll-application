import axios from 'axios';
import config from '../config'

let pollService = null;

class PollService {
	getByPage(page = 0) {
		return axios.get(`${config.baseUrl}/polls?page=${page}`);
	}

    vote(id, vote) {
		return axios.get(`${config.baseUrl}/poll/${id}/vote/${vote}`);
	}
}

if (!pollService) {
    pollService = new PollService();
}

export default pollService;